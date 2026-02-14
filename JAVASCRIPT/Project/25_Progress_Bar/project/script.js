const circle = document.getElementById("circle");
const number = document.getElementById("number");

const radius = circle.getAttribute("r");
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

let start = null;
let duration = 2000; // 2 seconds
let targetPercent = 80; // change this to any %

function animate(timestamp) {
  if (!start) start = timestamp;

  let elapsed = timestamp - start;
  let percent = Math.min(elapsed / duration, 1);

  let currentPercent = percent * targetPercent;

  let offset = circumference - (currentPercent / 100) * circumference;

  circle.style.strokeDashoffset = offset;

  number.textContent = Math.floor(currentPercent) + "%";

  if (elapsed < duration) {
    requestAnimationFrame(animate);
  }
}

requestAnimationFrame(animate);

/*
setInterval -> requestAnimationFrame()

requestAnimationFrame()
-sync with monitor refresh rate
-No unnecessary CPU usage
-No timing mismatch

setInterval() → runs based on time
requestAnimationFrame() → runs based on screen rendering

🧠 Structure of requestAnimationFrame
function animate(currentTime) {
   requestAnimationFrame(animate);
}

ImP  : strokeDasharray makes the stroke length equal to full circle, and strokeDashoffset controls how much of that stroke is hidden.

Circular Progress Animation – Short Notes
1. DOM

Select elements first so JavaScript can modify them.

2. Circle Math

Radius = center to edge.
Circumference = total boundary length.

Formula:
Circumference = 2 × π × radius

3. Stroke Logic

strokeDasharray = total stroke length

strokeDashoffset = hidden part

Offset = full circumference → circle hidden
Offset = 0 → full circle visible

4. Animation Timing

requestAnimationFrame runs once.

To continue animation, call it again inside the function.

5. Timestamp

Given automatically by browser.

Represents current time since page load.

Increases because real time passes.

6. Elapsed Time

Elapsed = Current Time − Start Time
It increases automatically as time passes.

7. Progress

Progress = Elapsed / Duration
Value between 0 and 1.
Limit it to 1 so it never exceeds 100%.

8. Current Percentage

Current Percentage = Progress × Target Percentage

9. Offset Calculation

Convert percentage to circle length.
Subtract from full circumference.
Remaining value hides the stroke.

10. Stop Condition

Keep calling requestAnimationFrame while elapsed < duration.
Stop when duration completes.

*/
