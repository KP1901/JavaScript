const icon = document.getElementById("icon");
let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let list = document.getElementById("list");

selectField.addEventListener("click", (e) => {
  e.stopPropagation();
  icon.classList.toggle("rotate");
  list.classList.toggle("hide");
});

list.addEventListener("click", (e) => {
  const option = e.target.closest(".options");
  if (!option) return;
  selectText.textContent = option.querySelector("p").textContent;
  list.classList.add("hide");
  icon.classList.remove("rotate");
});
// options.forEach((option) => {
//   option.addEventListener("click", (e) => {
//     e.stopPropagation();
//     selectText.textContent = option.querySelector("p").textContent;
//     list.classList.add("hide");
//     icon.classList.remove("rotate");
//   });
// });

document.addEventListener("click", () => {
  list.classList.add("hide");
  icon.classList.remove("rotate");
});

/*
1.Query DOM Once
Store DOM elements at the top of the file.
Avoid querying inside event listeners to keep code efficient and clean.

2.Toggle vs Add/Remove
Use toggle() when the same element controls open/close.
Use add() and remove() when you know the exact state you want.
Always control UI state intentionally.

3.Event Bubbling
Events move from child → parent → document.
Use e.stopPropagation() to prevent unwanted behavior.

4.Event Delegation
Instead of adding listeners to every option, attach one listener to the parent.
This improves scalability and performance.

5.Safe Target Handling
Do not rely directly on e.target.
Use e.target.closest(".options") to safely detect the correct element.

6.textContent vs innerText
Prefer textContent because it is faster and not affected by CSS styling.

7.Proper Hiding Method
Use display: none for dropdowns.
It removes the element completely from layout.

8.Outside Click Handling
Use a document click listener to close the dropdown when clicking outside.
This makes the component production-ready.

9.Positioning Dropdown
Use position: relative on the container and position: absolute on the dropdown list.
This ensures correct alignment.

*/