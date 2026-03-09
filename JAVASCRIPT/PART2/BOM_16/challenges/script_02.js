const circle = document.querySelector(".circle");
const box = document.querySelector(".box");

document.addEventListener("mousemove", (e) => {
  //   circle.style.position = "absolute";
  //   circle.style.left = e.clientX + "px";
  //   circle.style.top = e.clientY + "px";

  let circleRect = circle.getBoundingClientRect();
  let boxRect = box.getBoundingClientRect();

  //   console.log(rect.width / 2);
  let res1 = e.clientX - circleRect.width / 2;
  let res2 = e.clientY - circleRect.height / 2;
  circle.style.cssText = `
    left : ${res1}px;
    top : ${res2}px;    
  `;

  if (
    circleRect.right > boxRect.left &&
    circleRect.left < boxRect.right &&
    circleRect.bottom > boxRect.top &&
    circleRect.top < boxRect.bottom
  ) {
    circle.style.background = "#fff";
  }
});
