//  1. neseted scope

let x = 10;

function outer() {
  let y = 20;
  function inner() {
    let z = 30;
    console.log(x, y, z);
  }
  inner();
}

outer();

/*
✅ The inner function can access everything outside of it (called the scope chain).
❌ Outer cannot access inner’s variables.

When JS executes inner():

-Look in local scope
-Not found → go to outer scope
-Keep going → global scope

📌 This step-by-step lookup path is called scope chaining.

imp = so always scope chaining + lexical environment  works together
*/

/*
🌍 GLOBAL EXECUTION CONTEXT (GEC)
🔹 Creation Phase (Global)
Global Execution Context
-----------------------
Lexical Environment:
Environment Record:
x → <uninitialized>   (TDZ)
outer → function outer() { ... }
console → Console object
this → window

Outer Reference → null


⚠️ let x is hoisted but uninitialized (TDZ)

🔹 Execution Phase (Global)
let x = 10;     // TDZ ends → x = 10
outer();       // function call


➡️ Creates outer Execution Context

🔹 OUTER EXECUTION CONTEXT
🔹 Creation Phase (outer)
outer Execution Context
----------------------
Lexical Environment:
Environment Record:
y → <uninitialized>   (TDZ)
inner → function inner() { ... }

Outer Reference → Global Lexical Environment

🔹 Execution Phase (outer)
let y = 20;     // TDZ ends → y = 20
inner();       // function call


➡️ Creates inner Execution Context

🔸 INNER EXECUTION CONTEXT
🔹 Creation Phase (inner)
inner Execution Context
----------------------
Lexical Environment:
Environment Record:
z → <uninitialized>   (TDZ)

Outer Reference → outer Lexical Environment

🔹 Execution Phase (inner)
let z = 30;     // TDZ ends → z = 30
console.log(x, y, z);

🔍 Variable lookup (Scope Chain)
x → Global LE  ✅ (10)
y → outer LE   ✅ (20)
z → inner LE   ✅ (30)


✔️ Output:

10 20 30

✅ Correct Rule (Very Important)

When a variable is needed (like in console.log) JavaScript starts the lookup using the scope chain.
*/