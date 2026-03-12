const circle = document.querySelector(".circle");
const btn = document.querySelector(".btn");

document.addEventListener("mousemove", (e) => {
  const circleRect = circle.getBoundingClientRect();

  let offsetX = e.clientX + 10;
  let offsetY = e.clientY + 10;

  circle.style.left = offsetX - circleRect.width / 2 + "px";
  circle.style.top = offsetY - circleRect.height / 2 + "px";
});

btn.addEventListener("mouseenter", () => {
  circle.style.cssText = `
        width:50px;
        height:50px;
    `;
  //   circle.style.width = "50px";
  //   circle.style.height = "50px";
});
btn.addEventListener("mouseleave", () => {
  circle.style.width = "20px";
  circle.style.height = "20px";
});
