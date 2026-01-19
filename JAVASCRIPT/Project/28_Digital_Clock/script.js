(function setupDigitalClock() {
  const hours = document.getElementById("hrs");
  const mins = document.getElementById("min");
  const seconds = document.getElementById("sec");

  if (!hours || !mins || !seconds) return;

  function updateTime() {
    const currentTime = new Date();

    hours.textContent = String(currentTime.getHours()).padStart(2, "0");
    mins.textContent = String(currentTime.getMinutes()).padStart(2, "0");
    seconds.textContent = String(currentTime.getSeconds()).padStart(2, "0");
  }
  updateTime();
  setInterval(updateTime, 1000);
})();

/*
Lesson 1 : 
never runs dom inside setInterval/SetTimeout it should be separate

Lesson 2 :
setInterval ≠ immediate execution (thats why you were refreshing) => updates after 1s so load defualt html
so call the function 

Lesson 3 :
dont use nested IIFE unnecessary

Lesson 4:
Prefer textContent over innerText for performance and predictability.

Lesson 5:

Always add defensive checks
Production code assumes things can break.

if (!el) return;

Simple → powerful.

Lesson 6:

Initialization and repeated logic should be clearly separated.

Setup → DOM, guards
Logic → updateTime()

--------------------------------------------

(function () { ... })();        → run immediately, private scope
const el = document.getElementById("id"); → get DOM element reference
if (!el) return;               → safety guard, stop execution
function fn() {}               → reusable logic block
new Date();                    → current time snapshot
getHours()                     → hour (0–23)
getMinutes()                   → minute (0–59)
getSeconds()                   → second (0–59)
String(num)                    → convert number to string
padStart(2, "0")               → force 2-digit format
el.textContent = value;        → fast text update
fn();                          → execute immediately
setInterval(fn, 1000);         → repeat every 1 second (not immediate)

*/
