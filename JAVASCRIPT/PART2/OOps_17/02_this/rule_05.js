/*
Rule 5 — this in Event Listeners

When using a normal function in an event listener:

this → the element that triggered the event (this === element)
*/

const btn = document.querySelector("button");

btn.addEventListener("click", function (e) {
  console.log(this);
});

/*
now using arrow function which take this from surrounding

surrounding scope = window (this === window)
*/

btn.addEventListener("click", () => {
  console.log(this);
});
