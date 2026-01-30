/*
“A lexical environment consists of an environment record and an outer reference. 
It stores variables and functions for a specific execution context and defines the scope chain, 
which determines where variables are alive and who can access them.”
*/

function outer() {
  let x = 10;

  function inner() {
    console.log(x);
  }

  inner();
}

outer();

/*
1️⃣ “Where variables live”

When outer() is called:

JavaScript creates a lexical environment for outer:

outer Lexical Environment
-------------------------
x → 10
inner → function

This is where x lives.

When inner() is called:

JavaScript creates a lexical environment for inner:

inner Lexical Environment
-------------------------
(no x here)

So:
x does NOT live inside inner.
It lives in outer’s lexical environment.


2️⃣ “Who can access the variables?”

console.log(x);

JavaScript checks:

Step-by-step lookup (scope chain):
1. Look inside inner’s lexical environment ❌
2. Go to outer’s lexical environment ✅
3. Find x = 10

📌 Because:

inner was defined inside outer.
inner’s lexical environment has an outer reference to outer’s environment,
so inner can access the outer variable.

Important:
Scope chain + lexical environment + closure work together.

-------------------------------------------------------------
Apply it to your example:

function outer() {
  let x = 10;
  function inner() {
    console.log(x);
  }
  inner();
}

Lexical Environment → x is stored in outer LE
Scope Chain → inner → outer → global
Closure → inner retains access to x

✔️ All three concepts work together.
*/
