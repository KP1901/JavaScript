/*
🧩 Challenge 7

Question:
Validate a 10-digit phone number (digits only).

"9876543210"


Expected Output:

true
*/

let str = "9876543210";
console.log(/^\d{10}$/.test(str));

/*
/^\d+$/ = >
 So this would mean(one or more digit) also pass ❌:

"123"
"1234567890123"

🧠 Key fix

{10} → exactly 10 digits
^ $ → no extra characters
*/
