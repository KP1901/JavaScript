/*
8️⃣ Event Bubbling & Capturing

-When an event happens, it does not stay only on that element.
It travels through the DOM tree.

Event propagation has 2 phases:

1️⃣ Capturing phase
2️⃣ Bubbling phase

1️⃣ Event Bubbling (Default Behavior)

When a button is clicked, the event travels upward.

button
   ↓
div
   ↓
body
   ↓
html
   ↓
document

So parent elements also receive the event.

const parent = document.querySelector("#parent");
const btn = document.querySelector("#btn");

parent.addEventListener("click", () => {
  console.log("DIV clicked");
});

btn.addEventListener("click", () => {
  console.log("BUTTON clicked");
});

If you click the button:

BUTTON clicked
DIV clicked

Why?

Because the event bubbles up to the parent

2️⃣ Event Capturing

Capturing is the opposite direction.

document
   ↓
html
   ↓
body
   ↓
div
   ↓
button

It travels downwards.

Capturing is disabled by default.

3️⃣ stopPropagation()

Stops the event from moving further.

Example:

btn.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("BUTTON clicked");
});

Now clicking button prints only:

BUTTON clicked

Parent event does not run.

IMP :

it first goes top to bottom then capture the event then return from target element to document

Correct explanation:

1️⃣ Event travels top → down (capturing phase)
2️⃣ Event reaches target element
3️⃣ Event travels back up → document (bubbling phase)
*/

