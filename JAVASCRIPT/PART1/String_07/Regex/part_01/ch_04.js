/*
🧩 Challenge 4

Question:
Check if the string ends with a number.

"order123"


Expected Output:

true

*/

let str = "order121";
console.log(/\d$/.test(str));

/*
✔ \d → digit
✔ $ → end of string
✔ test() → boolean check
*/