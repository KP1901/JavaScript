/*
Element Scroll Position (Short)

Element scroll position tells how much the content inside an element has been scrolled.

There are two properties:

| Property     | Meaning                    |
| ------------ | -------------------------- |
| `scrollTop`  | vertical scroll position   |
| `scrollLeft` | horizontal scroll position |

1 scrollLeft

Shows how many pixels the content moved Top.

element.scrollTop

Example:

box.scrollTop = 100;

Meaning:

100px content moved Top

2️⃣ scrollLeft

Shows how many pixels the content moved left.

element.scrollLeft

Example:

box.scrollLeft = 100;

Meaning:

100px content moved left

window.scrollY → tells how much the document has been scrolled vertically relative to the viewport.

element.scrollTop → tells how much the content inside an element has been scrolled relative to that element.
*/

const box = document.querySelector(".box");

box.addEventListener("scroll", () => {
  console.log(box.scrollTop);
});
