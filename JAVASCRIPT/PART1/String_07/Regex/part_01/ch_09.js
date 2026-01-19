/*
🧩 Challenge 9

Question:
Mask the phone number by replacing all digits with *.

"My number is 9876543210"


Expected Output:

"My number is **********"


*/

let str = "9876543210";
console.log(str.replace(/\d/g, "*"));

/*
✔ \d → digit
✔ g → replace all digits
✔ replace() → masking

"My number is 9876543210".replace(/\d/g, "*");
"My number is **********"

*/