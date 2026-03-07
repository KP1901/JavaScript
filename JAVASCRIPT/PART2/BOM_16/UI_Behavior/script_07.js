/*
STEP 6 — Element Size Properties

clientWidth and clientHeight

Size inside padding.

 - content + padding

Does NOT include

border
scrollbar
margin
*/

const box = document.querySelector(".box");

// box.addEventListener("click", () => {
//   console.log(box.clientWidth);
//   console.log(box.clientHeight);
// });

// --------------------------

/*
offsetWidth and offsetHeight

Includes

content
padding
border
scrollbar

Example

box.offsetWidth
box.offsetHeight

*/
// box.addEventListener("click", () => {
//   console.log(box.offsetWidth);
//   console.log(box.offsetHeight);
// });

// --------------------------

/*
scrollWidth and scrollHeight

Full content size including hidden scroll content.

*/

box.addEventListener("click", () => {
  console.log(box.scrollWidth);
  console.log(box.scrollHeight);
});

/*
| Property      | Covers                                 |
| ------------- | -------------------------------------- |
| `clientWidth` | content + padding                      |
| `offsetWidth` | content + padding + border + scrollbar |
| `scrollWidth` | content + padding + hidden overflow    |

clientWidth → visible area
offsetWidth → element physical size
scrollWidth → full content size (including hidden)
*/
