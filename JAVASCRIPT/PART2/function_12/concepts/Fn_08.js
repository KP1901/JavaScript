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
sayHi(); // ❌ TypeError: sayHi is not a function

var sayHi = function () {
  console.log("Hello!");
};

✅ Scope chain means an inner function can access variables from its own scope and all outer scopes up to the global scope.
✅ Scope chain is created by outer references

❌ Outer cannot access inner’s variables.

When JS executes inner():

-Look in local scope
-Not found → go to outer scope
-Keep going → global scope

📌 This step-by-step lookup path is called scope chaining.

imp = so always scope chaining + lexical environment + closure + works together
*/

/*
1️⃣ GLOBAL EXECUTION CONTEXT (Creation Phase)
------------------------------
Execution Context
  ├─ Lexical Environment (LE)
  │    ├─ Environment Record (ER)
  │    └─ Outer Reference (OR)
  └─ this

----------------------------
Lexical Environment (Global LE)

Environment Record (ER):
  x       → <uninitialized> (TDZ)
  outer   → function outer() { ... }
  console → Console object

Outer Reference (OR):
  null

this value :

this → window

2️⃣ GLOBAL EXECUTION CONTEXT (Execution Phase)

GLobal  Lexical Environment:

Environment Record (ER):
  x       → 10
  outer   → function outer() { ... }
  console → Console object

Outer Reference (OR):
  null

  
3️⃣ CALL STACK after outer() is called


4️⃣ OUTER EXECUTION CONTEXT (Creation Phase)

Outer Lexical Environment:

Environment Record (ER):
  y       → <uninitialized> (TDZ)
  inner   → function inner() { ... }

Outer Reference (OR):
  Global LE

this value :

this → window

5️⃣ OUTER EXECUTION CONTEXT (Execution Phase)

Outer Lexical Environment:

Environment Record (ER):
  y       → 20
  inner   → function inner() { ... }

Outer Reference (OR):
  Global LE

6️⃣ INNER EXECUTION CONTEXT (Creation Phase)

Inner LE : 

Environment Record (ER):
  z       → <uninitialized> (TDZ)

Outer Reference (OR):
  Outer LE

  this value :

this → window

7️⃣ INNER EXECUTION CONTEXT (Execution Phase)

Inner LE : 
Environment Record (ER):
  z       → 30

Outer Reference (OR):
  Outer LE

🔁 Scope Chain inside inner()

Inner LE → Outer LE → Global LE

So, console.log(x, y, z) resolves as:

x → 10 (Global)
y → 20 (Outer)
z → 30 (Inner)

✔️ Output:

10 20 30

✅ Correct Rule (Very Important)

When a variable is needed (like in console.log) JavaScript starts the lookup using the scope chain.
*/
