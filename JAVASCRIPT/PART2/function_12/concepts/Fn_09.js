// Lexical Environment = where variables live + who they can access (mean which environment can access)

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

When outer() is called

JavaScript creates a lexical environment for outer:

outer Lexical Environment
-------------------------
x → 10
inner → function

This is where x lives.

When inner() is called

JavaScript creates a lexical environment for inner:

inner Lexical Environment
-------------------------
(no x here)

So:
x does NOT live inside inner
It lives in outer’s lexical environment


2️⃣ “Who they can access”

console.log(x);

JavaScript checks:

Step-by-step lookup (scope chain):
1.Look inside inner’s lexical environment ❌
2.Go to outer’s lexical environment ✅
3.Find x = 10

📌 Because:

inner was written inside outer
Its lexical environment has a reference to outer’s environment thats why inner can access outside variable

imp = so always scope chaining + lexical environment  works together
*/
