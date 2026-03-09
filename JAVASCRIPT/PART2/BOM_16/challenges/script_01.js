const circle = document.querySelector(".circle");

const box = document.querySelector(".box");

circle.addEventListener("mousedown", (e) => {
  console.log(e);
});

circle.addEventListener("dragend", (e) => {
  let rect = box.getBoundingClientRect();
  console.log(rect);

  const insideX = e.clientX > rect.left && e.clientX < rect.right;

  const insideY = e.clientY > rect.top && e.clientY < rect.bottom;
  if (insideX && insideY) {
    box.append(circle);
  }
  console.log("drag end");
});
