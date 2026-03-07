/*
3️⃣ screenX and screenY

Mouse position relative to the physical monitor.

*/

document.addEventListener("mousemove", (e) => {
  console.log(e.screenX, e.screenY);
});

/*
This includes

OS UI
browser UI
tabs
address bar
everything
*/
