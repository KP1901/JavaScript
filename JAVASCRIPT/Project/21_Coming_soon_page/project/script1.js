const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

let serverOffset = 0;
let interval;

const launchDate = new Date("Feb 16,2026 00:00:00").getTime();

async function syncTime() {
  try {
    const response = await fetch("http://localhost:3000/time");
    const data = await response.json();
    serverOffset = data.serverTime - Date.now();
  } catch (error) {
    console.error("Failed to sync time:", error);
  }
}

function updateCountdown() {
  let now = Date.now() + serverOffset;
  const distance = launchDate - now;

  if (distance <= 0) {
    clearInterval(interval);
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const totalSeconds = Math.floor(distance / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

async function init() {
  await syncTime();
  updateCountdown();
  interval = setInterval(updateCountdown, 1000);
}

init();
updateCountdown();

/*

🧠 LESSON 1 — Client Time Cannot Be Trusted

You learned this:

Date.now()

Depends on:

-User system clock
-Manual time change
-Timezone changes

So for serious applications, you must use:

Server time → calculate offset → adjust locally

This is real-world engineering thinking.

🧠 LESSON 2 — Time Offset Pattern

This line is very important:

serverOffset = data.serverTime - Date.now();

You learned a powerful concept:

TrueTime = LocalTime + Offset


This pattern is used in:

-Online auctions
-Crypto launches
-Flash sales
-Multiplayer games
-Distributed systems

You just implemented distributed time sync logic.

That’s big.


🧠 LESSON 3 — Async Initialization Pattern

This part:

async function init() {
  await syncTime();
  updateCountdown();
  interval = setInterval(updateCountdown, 1000);
}


You learned:

-How to initialize async setup before app starts
-Why await matters before starting interval
-How to structure startup logic cleanly
-This is real production structure.


🧠 LESSON 4 — Separation of Responsibilities

Your code is clean because:

-syncTime() → only fetches time
-updateCountdown() → only updates UI
-init() → controls startup

That’s modular design.


🧠 LESSON 5 — Defensive Programming

if (distance <= 0)

You handled:

-Edge cases
-Negative time
-Interval cleanup

That’s professional habit.

🧠 LESSON 6 — Understanding Runtime Environments

You learned:

-Browser JS ≠ Node.js
-Ports matter
-Frontend and backend are separate
-CORS exists
-Express is a wrapper over HTTP

That’s real full-stack understanding.

🧠 LESSON 7 — Time Decomposition Math

You mastered this logic:

totalSeconds
→ days
→ hours
→ minutes
→ seconds

That is:

-Modulo logic
-Remainder logic
-Unit breakdown logic

This pattern is reusable everywhere.

🧠 LESSON 8 — Event Loop Awareness

You used:

setInterval()

And learned:

-It is not perfectly accurate
-It can drift
-It depends on event loop
-That’s advanced awareness.
*/
