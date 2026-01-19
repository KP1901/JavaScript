const messageEl = document.getElementById("message");
const dateEl = document.getElementById("date");

function calculateAge() {
  let monthsdata = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dateObject = new Date();
  let date = dateObject.getUTCDate();
  let month = dateObject.getMonth() + 1;
  let year = dateObject.getUTCFullYear();

  let totalDate = dateEl.value;

  let inputYear = Number(totalDate.match(/^\d{4}/)[0]);
  let inputMonth = Number(totalDate.match(/-(\d{2})-/)[1]);
  let inputDate = Number(totalDate.match(/\d{2}$/)[0]);

  let yearDiff = inputMonth < month ? year - inputYear : year - inputYear;
  let monthDiff = inputMonth < month ? month - inputMonth : inputMonth - month;
  let dateDiff =
    date >= inputDate
      ? date - inputDate
      : monthsdata[month - 1] - inputDate + date;

  messageEl.textContent = `${yearDiff} years ${monthDiff} months ${dateDiff} days`;

  console.log(inputDate, inputMonth, inputYear);
}
