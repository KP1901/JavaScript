const form = document.getElementById("demoForm");
const input = document.getElementById("fullname");
const errorEl = document.getElementById("fullname-error");

function showError(message) {
  errorEl.textContent = message;
  errorEl.classList.add("visible");
  input.setAttribute("aria-invalid", "true");
  input.focus();
}

function hideError() {
  errorEl.textContent = "";
  errorEl.classList.remove("visible");
  input.setAttribute("aria-invalid", "false");
}

form.addEventListener("submit", function (e) {
  const value = input.value.trim();

  if (value === "") {
    e.preventDefault();
    showError("Please enter your full name.");
  } else {
    hideError();
    // ✅ form will submit normally or you can do custom logic here
  }
});

input.addEventListener("input", function () {
  if (input.value.trim() !== "") hideError();
});

// input.addEventListener("paste", () => {
//   setTimeout(() => {
//     if (input.value.trim() !== "") hideError();
//   }, 0);
// });
