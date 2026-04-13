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
y → 20
inner → function

This is where y lives.

When inner() is called:

JavaScript creates a lexical environment for inner:

inner Lexical Environment
-------------------------
(no y here)

So:
y does NOT live inside inner.
It lives in outer’s lexical environment.


2️⃣ “Who can access the variables?”

console.log(y);

JavaScript checks:

Step-by-step lookup (scope chain):
1. Look inside inner’s lexical environment ❌
2. Go to outer’s lexical environment ✅
3. Find y = 20

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

Lexical Environment → y is stored in outer LE
Scope Chain → inner → outer → global
Closure → inner retains access to y

✔️ All three concepts work together.

-------------------------------------

*/

/*
=> concept 1 :

Lexical scope => means a function can access variables based on where it is defined in the code, not where it is called.

function outer() {
  let x = 20;

  function inner() {
    console.log(x);
  }
  inner();
}
outer();
console.log(x);

Lexical scope means a function can access variables based on where it is defined in the code, not where it is called.
In this example, x is defined inside the outer function, so it is accessible only inside outer and its inner functions, because inner functions have access to their outer scope.
---------------------------------------------------

Concept 2 : Lexical Envrionment  :

A lexical environment consists of two components: an environment record (which stores variables and function declarations) and a reference to its outer lexical environment.

1️⃣ Environment Record

Stores:

-Variables
-Function declarations
-Parameters

2️⃣ Outer Reference

Points to:

-The parent lexical environment

This is what creates the scope chain.
*/
