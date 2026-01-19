/*
2️⃣ while loop (Condition-driven)
🔑 Concept

-Loop runs while condition is true
-Count may be unknown

-intilization done outside loop
-condition check at entery level
-udpdation done inside loop body

💡 Why it matters
-Perfect for waiting / retry logic

*/

let attempt = 3;

while (attempt != 0) {
  console.log("try again");
  attempt--;
}
console.log(attempt);
