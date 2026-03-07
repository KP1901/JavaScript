/*
2️⃣ pageX and pageY

Mouse position relative to the full document.

Includes scroll.

pageX = clientX + scrollX
pageY = clientY + scrollY

-pageX calculates mouse position in viewport + how much the page has scrolled horizontally.
-pageY = mouse position in viewport + vertical scroll amount.

If page is scrolled 1000px down

clientY = 200
scrollY = 1000
pageY = 1200

scenario :

1.just keep the  mouse at the top of viewport it will show like this (clientY + scrollY) => (0+454)

2.just keep the mouse at the bottom of Viewport
it will show like this (clinetY + scrollY) => (700 + 500)

*/
document.addEventListener("mousemove", (e) => {
  console.log(e.pageX, e.pageY);
});
