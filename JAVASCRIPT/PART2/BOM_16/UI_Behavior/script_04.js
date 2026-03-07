/*

These tell how much the page is scrolled.

scrollX
Horizontal scroll.

scrollY
Vertical scroll.

-scrollY only tells how much the document has moved vertically inside the viewport.
-if page is scrolldown Y = 400
-it means The document moved 400px upward relative to the viewport
-same for horizontal

scrollY does NOT count:

❌ browser tabs
❌ address bar
❌ bookmarks bar
❌ window borders
❌ OS taskbar
❌ monitor space

Those are outside the webpage.
*/

document.addEventListener("scroll", (e) => {
  console.log(window.scrollY);
});
