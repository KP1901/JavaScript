const timeEl = document.getElementById("time");

let startTime = 25000000;
let elapsedTime = 0;

let timeInterval;

setInterval(() => {
  startTime = startTime - 1000;
  formatTimer(startTime);
}, 1000);

function formatTimer(startTime) {
  const seconds = Math.floor((startTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((startTime % (1000 * 3600)) / 60000);
  console.log(minutes);
}
