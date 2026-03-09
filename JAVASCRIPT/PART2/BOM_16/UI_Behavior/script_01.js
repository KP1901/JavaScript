/*
 1️⃣ clientX and clientY

clientX = horizontal mouse position inside the viewport
clientY = Vertical mouse position inside the viewport

Viewport means:

The visible browser area

It does NOT include page scroll.

*/

document.addEventListener("mousemove", (e) => {
  console.log(e.clientX, e.clientY);
});

