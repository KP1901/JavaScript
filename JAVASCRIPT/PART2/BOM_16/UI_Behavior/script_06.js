/*
STEP 5 — Element Position

To get element position relative to viewport.

getBoundingClientRect()

3️⃣ All Properties Returned

The method returns these properties:

| Property | Meaning                                      |
| -------- | -------------------------------------------- |
| `x`      | distance from viewport left                  |
| `y`      | distance from viewport top                   |
| `width`  | element width                                |
| `height` | element height                               |
| `top`    | distance from viewport top                   |
| `left`   | distance from viewport left                  |
| `right`  | distance from viewport left to element right |
| `bottom` | distance from viewport top to element bottom |

*/

const box = document.querySelector(".box");

let rect = box.getBoundingClientRect();

let elementW = rect.bottom - rect.top;
console.log(elementW);
