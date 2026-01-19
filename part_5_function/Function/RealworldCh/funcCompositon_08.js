// function trimSpaces(str) {
//   return String(str).trim();
// }

// function toLower(str) {
//   return str.toLowerCase();
// }

// function toNumber(str) {
//   return Number(str);
// }

// function fixAmount({ id, amount, type }) {
//   // both inputs are now properly cleaned
//   const cleanType = type.trim().toLowerCase();
//   const cleanAmount = Number(amount);

//   const finalAmount =
//     cleanType === "debit" ? -Math.abs(cleanAmount) : Math.abs(cleanAmount);

//   return { id, amount: finalAmount, type: cleanType };
// }

// function compose(...fns) {
//   return (value) => fns.reduce((acc, fn) => fn(acc), value);
// }

// // ✅ Clean input: trim + convert amount to number + lowercase type
// const processTransaction = compose(fixAmount, (t) => ({
//   ...t,
//   amount: toNumber(trimSpaces(t.amount)), // 👈 number conversion happens here
//   type: toLower(trimSpaces(t.type)), // 👈 type cleaned here
// }));

// const transactions = [
//   { id: 1, amount: " 2000 ", type: " CREDIT " },
//   { id: 2, amount: " -500 ", type: " debit " },
//   { id: 3, amount: "-1000", type: " CREDIT" },
//   { id: 4, amount: " -800", type: " CREDIT" },
// ];

// const cleanedTransactions = transactions.map(processTransaction);

// console.log(cleanedTransactions);

function trimSpaces(input) {
  return input.trim();
}

function toLower(input) {
  return input.toLowerCase();
}

function toNumber(inupt) {
  return Number(input);
}

function fixeAmount({ id, amount, type }) {}

function composition(...fns) {
  return (value) => fns.reduce((acc, fn) => fn(acc), value);
}

let processTransaction = composition(fixeAmount, (t) => ({
  ...t,
  amount: t.amount,
  type: t.type,
}));

const transactions = [
  { id: 1, amount: " 2000 ", type: " CREDIT " },
  { id: 2, amount: " -500 ", type: " debit " },
  { id: 3, amount: "-1000", type: " CREDIT" },
  { id: 4, amount: " -800", type: " CREDIT" },
];

const cleanedTransactions = transactions.map(processTransaction);
