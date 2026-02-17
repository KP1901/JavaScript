const passwordEl = document.getElementById("input-Pass");
const eyeIcon = document.getElementById("eyeicon");

eyeIcon.addEventListener("click", () => {
  if (passwordEl.type === "password") {
    passwordEl.type = "text";
    eyeIcon.src = "./eye-open.png";
  } else {
    passwordEl.type = "password";
    eyeIcon.src = "./eye-close.png";
  }
});

passwordEl.addEventListener("input", (e) => {
  passwordEl.value = passwordEl.value.replace(/\s+/g, "");
});
