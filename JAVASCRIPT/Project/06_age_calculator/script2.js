const messageEl = document.getElementById("message");
const dateEl = document.getElementById("date");

function calculateAge() {
  if (!dateEl.value) {
    messageEl.textContent = "Please select a date";
    return;
  }

  const today = new Date();
  const dob = new Date(dateEl.value);

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  // if days negative → borrow from previous month
  if (days < 0) {
    months--;
    const prevMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    days += prevMonth;
  }

  // if months negative → borrow from year
  if (months < 0) {
    years--;
    months += 12;
  }

  messageEl.textContent = `${years} years ${months} months ${days} days`;
}
