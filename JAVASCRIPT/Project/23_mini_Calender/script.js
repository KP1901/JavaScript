const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

function updateCalender() {
  const now = new Date();

  const formatter = new Intl.DateTimeFormat("en-us", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const parts = formatter.formatToParts(now);

  /*
short list

const obj = parts.find((p) => p.type == "weekday")
const dayName = obj.value;
*/
  const dayName = parts.find((p) => p.type == "weekday").value;
  const dayNumber = parts.find((p) => p.type == "day").value;
  const monthName = parts.find((p) => p.type === "month").value;
  const yearName = parts.find((p) => p.type == "year").value;

  if (date && day && month && year) {
    date.textContent = String(dayNumber).padStart(2, "0");
    day.textContent = dayName;
    month.textContent = monthName;
    year.textContent = yearName;
  }
}
updateCalender();

/*
LEVEL 1 – Remove Unnecessary Code

Problem:
Manual arrays for weekdays and months.

Better Approach:
Use built-in JavaScript Intl API.

Instead of:
const weekDays = [...]
const allMonths = [...]

Use:
new Intl.DateTimeFormat()

Why?

-International ready
-Less code
-Cleaner
-Industry standard

LEVEL 2 – Avoid Global Scope Pollution

Problem:
Variables declared in global scope can conflict in large apps.

Optimized Version:

(() => {
function updateCalendar() {
const now = new Date();
logic here
}

updateCalendar();
})();

Why?

-Keeps variables private
-Cleaner architecture
-Safer for large applications

LEVEL 3 – Cache DOM Elements

Problem:
Calling document.getElementById() multiple times is slower.

Correct Way:
Select elements once at the top.

Example:
const dateEL = document.getElementById("date");

Why?

-DOM search is expensive
-Improves performance
-Cleaner structure

LEVEL 4 – Avoid Repeated Array Searching

Instead of:
parts.find(...)
parts.find(...)
parts.find(...)

Better Way:

const data = Object.fromEntries(
formatter.formatToParts(now).map(p => [p.type, p.value])
);

Then:
dateEL.textContent = data.day;
dayEL.textContent = data.weekday;
monthEL.textContent = data.month;
yearEL.textContent = data.year;

Why?

-Only one iteration
-More scalable
-Cleaner logic

LEVEL 5 – Defensive Programming

Never assume elements exist.

Add safety check:

if (!dateEL || !dayEL || !monthEL || !yearEL) return;

Why?

Prevents runtime crash
Production safety

LEVEL 6 – Avoid Over-Optimization

This mini calendar:

-Runs once
-No heavy loops
-No large DOM manipulation

So performance is already good.

Remember:
Premature optimization is bad practice.
*/
