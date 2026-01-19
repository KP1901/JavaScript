/*
next
🧩 Challenge 6 (Moderate)

Question:
Extract the year from the date string.

"2024-08-21"


Expected Output:

["2024"]
*/
let date = "2024-08-21";

console.log(date.match(/\d{4}/g));

/*
✔ \d{4} → exactly 4 digits (year)
✔ g → returns matches as an array
*/
