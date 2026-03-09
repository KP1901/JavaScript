/*
Rule 2 — this in Normal Function

Example:

function show() {
  console.log(this)
}

show()

Non-Strict Mode
this → window

Strict Mode
"use strict"

function show() {
  console.log(this)
}

show()

Output:

undefined

Rule:

Normal function call

Non-strict → this = window
Strict → this = undefined


In the Node.js environment, this at the top level refers to an empty object {}.
When we access this.a, it shows undefined.
*/

var a = 50;
function show() {
  console.log(this.a);
}
show();
