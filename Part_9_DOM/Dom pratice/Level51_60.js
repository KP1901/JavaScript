// 51

const parent51 = document.querySelector(".parent51");

const h2El = document.createElement("h2");
h2El.textContent = "Challenge 51";
parent51.appendChild(h2El);

// 52

const elementOfArray = ["h2", "p", "span"];

const parent52 = document.querySelector(".parent52");
elementOfArray.forEach((el) => {
  let addel = document.createElement(el);
  addel.classList.add("hi");
  parent52.appendChild(addel);
});

// // 53

// Select container to append the form
const parent53 = document.querySelector(".parent53");

// Create form element
const form = document.createElement("form");

// Create a text input
const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.name = "name";
nameInput.placeholder = "Enter your name";
nameInput.required = true;

// Create an email input
const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.name = "email";
emailInput.placeholder = "Enter your email";
emailInput.required = true;

// Create a submit button
const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Submit";

// Append inputs and button to the form
form.appendChild(nameInput);
form.appendChild(emailInput);
form.appendChild(submitButton);

// Append form to the container
parent53.appendChild(form);

// Optional: handle form submission
form.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    console.log("Enter key pressed!");
  }
});

// // Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent page reload
  alert(`Name: ${nameInput.value}\nEmail: ${emailInput.value}`);
  form.reset(); // clear inputs
  nameInput.focus();
});

// 54
const comment = document.getElementById("comment");
const p54 = document.getElementById("p54");

comment.addEventListener("input", function (e) {
  p54.textContent = e.target.value.length;
});
