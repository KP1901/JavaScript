/*
Element Scroll Position (Short)

Element scroll position tells how much the content inside an element has been scrolled.

There are two properties:

| Property     | Meaning                    |
| ------------ | -------------------------- |
| `scrollTop`  | vertical scroll position   |
| `scrollLeft` | horizontal scroll position |

2️⃣ scrollLeft

Shows how many pixels the content moved left.

element.scrollLeft

Example:

box.scrollLeft = 100;

Meaning:

100px content moved left

2️⃣ scrollLeft

Shows how many pixels the content moved left.

element.scrollLeft

Example:

box.scrollLeft = 100;

Meaning:

100px content moved left
*/

const box = document.querySelector(".box");

box.addEventListener("scroll", () => {
  console.log(box.scrollLeft);
});
