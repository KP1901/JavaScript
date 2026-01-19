/*

3️⃣ do...while (Run at least once)
🔑 Concept

Body runs once before condition check

🧠 Practical Example

Show popup at least once

syntax :

do {
}while();
*/

let consent;

do {
  console.log("show consent popup");
  consent = true;
} while (!consent);

/*
Execution flow (very important)
1️⃣ do { ... } runs FIRST

do-while always executes the body at least once

So this line runs:

console.log("show consent popup");

Then:

consent = true;

2️⃣ Condition is checked AFTER the block
while (!consent)

consent is now true

!true → false

3️⃣ Loop stops

Because condition is false

❌ It does NOT run again

✅ Final behavior

✔ Popup is shown exactly once
✔ Loop does not repeat

*/

let password = 1234;

let userType;
let count = 1;
do {
  userType = parseInt(prompt("Enter your password "));
  if (userType === password) {
    console.log("✅ Access granted. Welcome!");
    break;
  } else {
    console.log("❌ Wrong PIN. Try again.");
    if (count === 3) {
      console.log("🚫 Card blocked. Too many wrong attempts.");
    }
  }
  count++;
} while (count <= 3);
