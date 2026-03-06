/*
1️⃣1️⃣ Forms & Input Handling

Forms are used everywhere:

login forms
signup forms
search boxes
contact forms
checkout forms

JavaScript helps us read input values and control submission.

1️⃣ Form submit Event

When a form is submitted, a submit event occurs.

HTML : 

<form id="form">
  <input id="name" placeholder="Enter name">
  <button type="submit">Submit</button>
</form>

JS :

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  console.log("Form submitted");
});

2️⃣ Default Behavior of Forms

Normally when a form submits:
page reloads

Browser sends data to server.

But in JavaScript apps we usually stop the reload.

3️⃣ preventDefault()

Stops the default browser action.

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form handled by JS");
});

form submits
↓
page does NOT reload
↓
JavaScript handles it

4️⃣ Reading Input Values

input.value

5️⃣ Reading Input on Form Submit

form.addEventListener("submit",()=>{
    e.preventByDefault()
    console.log(input.value)
    })

6️⃣ input Event (Detect Typing)

The input event fires whenever the user types.

Example:

input.addEventListener("input", (e) => {
  console.log(e.target.value);
});

If user types:
K
Ki
Kir
Kira

7️⃣ change Event

change fires after user finishes editing.

Example:

input.addEventListener("change", () => {
  console.log("Value changed");
});

Difference:

input  → fires on every keystroke
change → fires when editing finishes

8️⃣ Using FormData

A better way to read all form inputs.

Example HTML:

<form id="form">
  <input name="username">
  <input name="email">
  <button>Submit</button>
</form>

JavaScript:

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const data = new FormData(form);

  console.log(data.get("username"));
  console.log(data.get("email"));

});
*/
