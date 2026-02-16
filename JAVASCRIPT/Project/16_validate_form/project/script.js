let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName() {
  let name = document.getElementById("contact-name").value;

  if (name.length === 0) {
    nameError.innerHTML = "name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]{3,}\s{1}[A-Za-z]{3,}\s{1}[A-Za-z]{3,}$/)) {
    nameError.innerHTML = "write full name";
    return false;
  }
  nameError.innerHTML = `<i class="fas fa-check-circle" style="color:green"></i>`;
  return true;
}
function validatePhone() {
  let phone = document.getElementById("contact-phone").value;

  if (phone.length === 0) {
    phoneError.innerHTML = "Phone no. is required";
    return false;
  }

  if (phone.length !== 10) {
    phoneError.innerHTML = "Phone number should be 10 digit";
    return false;
  }

  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "only digits please";
    return false;
  }

  phoneError.innerHTML = `<i class="fas fa-check-circle" style="color:green"></i>`;
  return true;
}
function validateEmail() {
  let email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailError.innerHTML = "email is required";
    return false;
  }
  if (!email.match(/^\w{4,}\@[A-Za-z]{3,}\.[A-Za-z]{3,}$/)) {
    emailError.innerHTML = "invalid";
    return false;
  } else {
    emailError.innerHTML = `<i class="fas fa-check-circle" style="color:green"></i>`;
    return true;
  }
}
