/*
6️⃣ Event Listeners (Making Webpages Interactive)

Examples:

user clicks a button
user types in input
user submits form
user moves mouse

These actions are called events.

1️⃣ What is an Event?

An event is something that happens in the browser.

click
input
keydown
mouseover
submit
scroll

2️⃣ addEventListener() => This is the main way to listen for events.

syntax :
element.addEventListener("event", callbackFunction)

Example:

button.addEventListener("click", function() {
  console.log("Button clicked");
});

5️⃣ Common Events

| Event     | When it happens |
| --------- | --------------- |
| click     | user clicks     |
| input     | user types      |
| change    | value changes   |
| submit    | form submitted  |
| keydown   | key pressed     |
| mouseover | mouse hover     |


User clicks button
      ↓
Browser detects click
      ↓
Event listener runs
      ↓
Callback function executes

*/