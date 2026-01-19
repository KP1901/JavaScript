const timerEl = document.getElementById("timer");
const startBtnEl = document.getElementById("start");
const stopBtnEl = document.getElementById("stop");
const resetBtnEl = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timeInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;

  timeInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerEl.textContent = formatTimer(elapsedTime);
  }, 10);

  stopBtnEl.disabled = false;
}

function formatTimer(elapsedTime) {
  const centiSec = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 3600)) / 60000);
  const hours = Math.floor(elapsedTime / (3600 * 1000));
  return `${hours <= 9 ? "0" + hours : hours}:${
    minutes <= 9 ? "0" + minutes : minutes
  }:${seconds <= 9 ? "0" + seconds : seconds}:${
    centiSec <= 9 ? "0" + centiSec : centiSec
  }`;
}

function stopTimer() {
  clearInterval(timeInterval);
  stopBtnEl.disabled = true;
}

function resetTimer() {
  startTime = 0;
  elapsedTime = 0;
  clearInterval(timeInterval);
  timerEl.textContent = "00:00:00:00";
}

startBtnEl.addEventListener("click", startTimer);
stopBtnEl.addEventListener("click", stopTimer);
resetBtnEl.addEventListener("click", resetTimer);

/*
=====================================================
STOPWATCH TIME EXPLANATION — FULL NOTES
=====================================================

1. What is elapsedTime?
------------------------
elapsedTime is the total time (in milliseconds) that has passed 
since the stopwatch started.

It is calculated using this formula:

    elapsedTime = Date.now() - startTime

Date.now() gives the current time in milliseconds since 1970.

Example:
    startTime = 1400 ms
    current time = 1500 ms
    elapsedTime = 1500 - 1400 = 100 ms

This is how your stopwatch knows how long it has been running.


2. Why do we do startTime = Date.now() - elapsedTime?
------------------------------------------------------
This is used when you RESUME the stopwatch after pausing.

When you pause:
    elapsedTime stores the time already passed.

When you resume:
    startTime = currentTime - elapsedTime

This makes the stopwatch continue from where it stopped, instead 
of restarting from zero.

Example:
    Before pause:
        startTime = 1400
        Date.now() = 1500
        elapsedTime = 100 ms

    Resume:
        Date.now() still around = 1500
        newStartTime = 1500 - 100 = 1400

Timer continues smoothly from 100 ms, not from 0.


3. Time unit relationships
--------------------------
These are FIXED rules:

    1 second     = 1000 ms
    1 minute     = 60 seconds  = 60,000 ms
    1 hour       = 60 minutes  = 3600 seconds = 3,600,000 ms


4. Breaking elapsedTime into stopwatch units
--------------------------------------------

A) CENTISECONDS (CS)
--------------------
Centisecond = 1/100 of a second = 10 ms.

We only want 0–99, not 0–999, so we divide by 10.

Formula:
    centiSec = Math.floor((elapsedTime % 1000) / 10)

Explanation:
    elapsedTime % 1000  → gives milliseconds inside a second (0–999)
    / 10                → converts to centiseconds (0–99)

Example:
    elapsedTime = 12,340
    12,340 % 1000 = 340
    340 / 10 = 34 cs


B) SECONDS (0–59)
-----------------
Formula:
    seconds = Math.floor((elapsedTime % 60000) / 1000)

Explanation:
    60000 ms = 1 minute
    elapsedTime % 60000  → removes all full minutes
    /1000 → convert ms to seconds

Example:
    elapsedTime = 75,340
    75,340 % 60000 = 15,340
    15,340 / 1000 = 15 seconds


C) MINUTES (0–59)
-----------------
Formula:
    minutes = Math.floor((elapsedTime % 3600000) / 60000)

Explanation:
    3,600,000 ms = 1 hour
    elapsedTime % 3,600,000 → removes all full hours
    /60000 → convert ms to minutes

Example:
    elapsedTime = 4,500,000 ms
    4,500,000 % 3,600,000 = 900,000
    900,000 / 60,000 = 15 minutes


D) HOURS (0–∞)
---------------
Formula:
    hours = Math.floor(elapsedTime / 3600000)

Explanation:
    Divide by 3,600,000 to get total hours passed.


5. Final formatted output in HH:MM:SS:CS
----------------------------------------
Each value is turned into a string:

    If value < 10 → add a '0' in front
    Example: 5 becomes "05"

Final format:
    "HH:MM:SS:CS"

Example:
    01:23:45:67

Means:
    1 hour
    23 minutes
    45 seconds
    67 centiseconds


6. Why setInterval(..., 10)?
----------------------------
We update the stopwatch every 10 milliseconds.

This matches our smallest displayed unit (centisecond = 10 ms).

If we updated every 1 ms:
    → Too fast
If we updated every 100 ms:
    → Too slow


7. Summary of all correct formulas
----------------------------------

CENTISECONDS (0–99):
    Math.floor((elapsedTime % 1000) / 10)

SECONDS (0–59):
    Math.floor((elapsedTime % 60000) / 1000)

MINUTES (0–59):
    Math.floor((elapsedTime % 3600000) / 60000)

HOURS (0–∞):
    Math.floor(elapsedTime / 3600000)


8. Summary of pause/resume logic
--------------------------------
startTimer():
    startTime = Date.now() - elapsedTime

stopTimer():
    clearInterval(timeInterval)

resetTimer():
    elapsedTime = 0
    startTime = 0


=====================================================
END OF STOPWATCH EXPLANATION NOTES
=====================================================
.

*/
