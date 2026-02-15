const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const launchDate = new Date("Feb 16,2026 00:00:00").getTime();

function updateCountdown() {
  let now = Date.now();
  const distance = launchDate - now;

  if (distance <= 0) {
    clearInterval(interval);
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0",
  );
  const hours = String(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  ).padStart(2, "0");

  const minutes = String(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
  ).padStart(2, "0");

  const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
    2,
    "0",
  );

  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}
updateCountdown();
const interval = setInterval(updateCountdown, 1000);
