let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");
let form = document.getElementById("submit-form");

function validateName() {
  let name = document.getElementById("contact-name").value.trim();

  if (name.length === 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }

  if (!/^[A-Za-z]{3,}(\s[A-Za-z]{3,})+$/.test(name)) {
    nameError.innerHTML = "Write full name (min 2 words)";
    return false;
  }

  nameError.innerHTML = `<i class="fas fa-check-circle" style="color:green"></i>`;
  return true;
}

function validatePhone() {
  let phone = document.getElementById("contact-phone").value.trim();

  if (!/^[0-9]{10}$/.test(phone)) {
    phoneError.innerHTML = "Phone must be exactly 10 digits";
    return false;
  }

  phoneError.innerHTML = `<i class="fas fa-check-circle" style="color:green"></i>`;
  return true;
}

function validateEmail() {
  let email = document.getElementById("contact-email").value.trim();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.innerHTML = "Invalid email";
    return false;
  }

  emailError.innerHTML = `<i class="fas fa-check-circle" style="color:green"></i>`;
  return true;
}

function validateMessage() {
  let message = document.getElementById("contact-message").value.trim();

  if (message.length < 30) {
    messageError.innerHTML = `${30 - message.length} more characters required`;
    return false;
  }

  messageError.innerHTML = `<i class="fas fa-check-circle" style="color:green"></i>`;
  return true;
}

form.addEventListener("submit", function (e) {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    e.preventDefault();
    submitError.innerHTML = "Please fill all fields correctly";
  } else {
    submitError.innerHTML = "";
  }
});
