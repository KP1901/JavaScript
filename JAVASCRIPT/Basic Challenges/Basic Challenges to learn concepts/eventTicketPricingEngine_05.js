// eventTicketPricingEngine.js
const prompt = require("prompt-sync")({ sigint: true });

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * 1) PRICING TABLE (OBJECT LOOKUP)
 *    eventType → dayType → seatCategory → base price (in paise)
 * ─────────────────────────────────────────────────────────────────────────────
 */
const Rs = (x) => Math.round(x * 100); // rupees → paise (int)
const pricingTable = {
  concert: {
    weekday: { regular: Rs(1200), premium: Rs(2000), vip: Rs(3500) },
    weekend: { regular: Rs(1500), premium: Rs(2500), vip: Rs(4000) },
  },
  theater: {
    weekday: { regular: Rs(800), premium: Rs(1500), vip: Rs(2500) },
    weekend: { regular: Rs(1000), premium: Rs(1800), vip: Rs(3000) },
  },
  sports: {
    weekday: { regular: Rs(1000), premium: Rs(1800), vip: Rs(2800) },
    weekend: { regular: Rs(1300), premium: Rs(2200), vip: Rs(3500) },
  },
};

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * 2) HELPERS (currency, dates, validation)
 * ─────────────────────────────────────────────────────────────────────────────
 */
// const inr = (paise) =>
//   `₹${(paise / 100).toFixed(2)}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const inr = (paise) =>
  `₹${(paise / 100).toFixed(2)}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const isWeekend = (yyyyMmDd) => {
  const d = new Date(yyyyMmDd);
  if (isNaN(d)) return null;
  const day = d.getUTCDay(); // 0 Sun .. 6 Sat (UTC to avoid tz surprises for demo)
  return day === 0 || day === 6 ? "weekend" : "weekday";
};

const percentOf = (amountPaise, pct) => Math.round((amountPaise * pct) / 100);

const normalize = (s) => s.trim().toLowerCase();

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * 3) RULE ENGINE (COMPOSABLE ADJUSTMENTS)
 *    - We separate rule stages to control order:
 *      a) per-ticket pre-tax (e.g., weekend surcharge, senior discount)
 *      b) order-level pre-tax (e.g., bulk discount)
 *      c) taxes/fees (e.g., GST)
 *
 *    - We use BASIS = "base" for rule calculations to make percentage stacking
 *      order-independent (10% + 5% always equals +15% of base). If you prefer
 *      compounding, use BASIS "current".
 * ─────────────────────────────────────────────────────────────────────────────
 */
const BASIS = {
  BASE: "base",
  CURRENT: "current",
};

/**
 * Each rule = {
 *  name: string,
 *  stage: "ticket-pre-tax" | "order-pre-tax" | "tax",
 *  applies: (ctx) => boolean,
 *  amount: (args) => paise delta (positive surcharge or negative discount),
 *  basis?: "base" | "current" // defaults to "base" where relevant
 * }
 *
 * ctx includes:
 *  { eventType, dayType, seatCategory, numTickets, isSenior, applyGST, gstRate }
 */
const rules = [
  // Weekend surcharge: +10% of base (per ticket)
  {
    name: "Weekend Surcharge (+10%)",
    stage: "ticket-pre-tax",
    basis: BASIS.BASE,
    applies: (ctx) => ctx.dayType === "weekend",
    amount: ({ basePerTicket }) => percentOf(basePerTicket, 10),
  },

  // Senior discount: -15% of base (per ticket)
  {
    name: "Senior Discount (-15%)",
    stage: "ticket-pre-tax",
    basis: BASIS.BASE,
    applies: (ctx) => ctx.isSenior === true,
    amount: ({ basePerTicket }) => -percentOf(basePerTicket, 15),
  },

  // Bulk discount: -5% of subtotal IF 5+ tickets (order-level, pre-tax)
  {
    name: "Bulk Discount (-5% on subtotal)",
    stage: "order-pre-tax",
    applies: (ctx) => ctx.numTickets >= 5,
    amount: ({ perTicketAfterTicketRules, numTickets }) =>
      -percentOf(perTicketAfterTicketRules * numTickets, 5),
  },

  // GST (India example): +gstRate% on taxable amount (order-level, final tax)
  {
    name: "GST",
    stage: "tax",
    applies: (ctx) => ctx.applyGST === true && ctx.gstRate > 0,
    amount: ({ orderPreTaxTotal, gstRate }) =>
      percentOf(orderPreTaxTotal, gstRate),
  },
];

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * 4) CORE PRICING FUNCTION
 *    Returns detailed breakdown.
 * ─────────────────────────────────────────────────────────────────────────────
 */
function priceBooking({
  eventType,
  dayType,
  seatCategory,
  numTickets,
  isSenior,
  applyGST,
  gstRate,
}) {
  // Lookup base
  const basePerTicket =
    pricingTable[eventType]?.[dayType]?.[seatCategory] ?? null;
  if (basePerTicket == null) {
    throw new Error("Invalid selection (event/day/seat not found).");
  }

  const ctx = {
    eventType,
    dayType,
    seatCategory,
    numTickets,
    isSenior,
    applyGST,
    gstRate,
  };

  const trace = [];
  let perTicketAfterTicketRules = basePerTicket;

  // (a) Apply all ticket-pre-tax rules.
  for (const rule of rules.filter((r) => r.stage === "ticket-pre-tax")) {
    if (!rule.applies(ctx)) continue;
    const basis =
      rule.basis === BASIS.CURRENT ? perTicketAfterTicketRules : basePerTicket;
    const delta = rule.amount({ basePerTicket: basis });
    perTicketAfterTicketRules += delta;
    trace.push({
      scope: "per-ticket",
      name: rule.name,
      delta,
      perTicketRunning: perTicketAfterTicketRules,
      basis: rule.basis || BASIS.BASE,
    });
  }

  // Guard: prices must not drop below zero.
  if (perTicketAfterTicketRules < 0) perTicketAfterTicketRules = 0;

  // Subtotal before order-level rules:
  const subtotal = perTicketAfterTicketRules * numTickets;

  // (b) Apply order-pre-tax rules.
  let orderPreTaxTotal = subtotal;
  for (const rule of rules.filter((r) => r.stage === "order-pre-tax")) {
    if (!rule.applies(ctx)) continue;
    const delta = rule.amount({
      perTicketAfterTicketRules,
      numTickets,
    });
    orderPreTaxTotal += delta;
    trace.push({
      scope: "order",
      name: rule.name,
      delta,
      orderRunning: orderPreTaxTotal,
    });
  }

  if (orderPreTaxTotal < 0) orderPreTaxTotal = 0;

  // (c) Apply taxes.
  let taxTotal = 0;
  for (const rule of rules.filter((r) => r.stage === "tax")) {
    if (!rule.applies(ctx)) continue;
    const delta = rule.amount({
      orderPreTaxTotal,
      gstRate,
    });
    taxTotal += delta;
    trace.push({
      scope: "tax",
      name: rule.name + ` (+${gstRate}%)`,
      delta,
    });
  }

  const grandTotal = orderPreTaxTotal + taxTotal;

  return {
    inputs: {
      eventType,
      dayType,
      seatCategory,
      numTickets,
      isSenior,
      applyGST,
      gstRate,
    },
    basePerTicket,
    perTicketAfterTicketRules,
    subtotal,
    orderPreTaxTotal,
    taxTotal,
    grandTotal,
    trace,
  };
}

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * 5) INTERACTIVE CLI
 * ─────────────────────────────────────────────────────────────────────────────
 */
function askYesNo(q) {
  const v = normalize(prompt(q));
  return v === "y" || v === "yes";
}

(function main() {
  console.log("=== Event Ticket Booking (Tiered Pricing + Rule Engine) ===\n");

  const eventType = normalize(prompt("Event type (concert/theater/sports): "));
  let dayType = normalize(
    prompt("Day type (weekday/weekend) or leave blank to enter date: ")
  );

  if (!dayType) {
    const dateStr = prompt("Enter event date (YYYY-MM-DD): ").trim();
    const derived = isWeekend(dateStr);
    if (!derived) {
      console.log("Invalid date; defaulting to weekday.");
      dayType = "weekday";
    } else {
      dayType = derived;
      console.log(`Detected dayType from date: ${dayType}`);
    }
  }

  const seatCategory = normalize(
    prompt("Seat category (regular/premium/vip): ")
  );

  const numTickets = Number(prompt("Number of tickets: ").trim());
  if (!Number.isInteger(numTickets) || numTickets <= 0) {
    console.log("Invalid number of tickets.");
    process.exit(1);
  }

  const isSenior = askYesNo("Senior citizen? (y/n): ");
  const applyGST = askYesNo("Apply GST? (y/n): ");
  const gstRate = applyGST
    ? Number(prompt("GST rate % (e.g., 18): ").trim()) || 18
    : 0;

  let result;
  try {
    result = priceBooking({
      eventType,
      dayType,
      seatCategory,
      numTickets,
      isSenior,
      applyGST,
      gstRate,
    });
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }

  // ── Output
  console.log("\n--- Booking Summary ---");
  console.log(`Event:        ${eventType}`);
  console.log(`Day:          ${dayType}`);
  console.log(`Seat:         ${seatCategory}`);
  console.log(`Tickets:      ${numTickets}`);
  console.log(`Base/ ticket: ${inr(result.basePerTicket)}`);
  console.log("");

  // Trace
  if (result.trace.length) console.log("Adjustments:");
  for (const t of result.trace) {
    if (t.scope === "per-ticket") {
      console.log(
        `  • ${t.name} [${t.basis}]  ${t.delta >= 0 ? "+" : ""}${inr(
          t.delta
        )} per ticket  → running: ${inr(t.perTicketRunning)}`
      );
    } else if (t.scope === "order") {
      console.log(
        `  • ${t.name}  ${t.delta >= 0 ? "+" : ""}${inr(
          t.delta
        )} on order → running: ${inr(t.orderRunning)}`
      );
    } else if (t.scope === "tax") {
      console.log(`  • ${t.name}  +${inr(t.delta)}`);
    }
  }

  console.log("\nPrices:");
  console.log(
    `Per ticket after ticket rules: ${inr(result.perTicketAfterTicketRules)}`
  );
  console.log(`Subtotal (tickets × qty):      ${inr(result.subtotal)}`);
  console.log(`Order pre-tax total:           ${inr(result.orderPreTaxTotal)}`);
  console.log(`Tax total:                      ${inr(result.taxTotal)}`);
  console.log(`\nGrand Total:                   ${inr(result.grandTotal)}`);
})();
