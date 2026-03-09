
/*
-offsetX and offsetY give the mouse position inside the element where the event happened.

1️⃣ offsetX
event.offsetX

Shows horizontal distance from the element's left edge to the mouse.

element
|---------------------------|
|                           |
|                   ● click |
|<---- offsetX ---->  

2️⃣ offsetY
event.offsetY

Shows vertical distance from the element's top edge to the mouse.

element
|----------------|
|                |
|       ●        |
|                |
|                |
|                |

*/


const box = document.querySelector(".box");

box.addEventListener("mousemove", (e) => {
  console.log(e.offsetX);
});


/*
clientX → gives the mouse position relative to the viewport.

offsetX → gives the mouse position relative to the target element where the event occurred.
*/