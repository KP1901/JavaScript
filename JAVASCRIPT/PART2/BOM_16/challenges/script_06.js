// Challenge — Detect From Which Side the Mouse Enters an Element

const box = document.querySelector(".box");

box.addEventListener("mouseenter", (e) => {
  const rect = box.getBoundingClientRect();

  const distanceTop = e.clientY - rect.top;
  const distanceBottom = rect.bottom - e.clientY;
  const distanceLeft = e.clientX - rect.left;
  const distanceRight = rect.right - e.clientX;

  const min = Math.min(
    distanceTop,
    distanceBottom,
    distanceLeft,
    distanceRight,
  );

  if (min === distanceTop) {
    console.log("TOP");
  } else if (min === distanceBottom) {
    console.log("BOTTOM");
  } else if (min === distanceLeft) {
    console.log("LEFT");
  } else {
    console.log("RIGHT");
  }
});
