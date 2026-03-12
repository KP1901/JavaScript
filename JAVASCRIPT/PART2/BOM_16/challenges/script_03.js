/*

Challenge  — Mouse Spotlight (Logic Only)
Goal

A circle should follow the mouse cursor on the screen.
*/


const circle = document.querySelector(".circle");

document.addEventListener("mousemove", (e) => {
  let circleRect = circle.getBoundingClientRect();

  let halfWi = circleRect.width / 2;
  let halfHi = circleRect.height / 2;

  circle.style.left = e.clientX - halfWi + "px";
  circle.style.top = e.clientY - halfHi + "px";
});
