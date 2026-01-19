// 6️⃣ Function Scope — Local vs Global Variables

/*
🧠 Definition:

Scope means where a variable can be accessed in your code.

In JavaScript, we have mainly two types of scope (for now):

Global Scope — variables available everywhere

Local Scope — variables available only inside the function where they are defined
*/

// 1️⃣ Global Scope

let message = "Hello Global!";

function sayhi() {
  console.log(message);
}
sayhi();
console.log(message);
console.log();

// 2️⃣ Local Scope

function greet() {
  let name = "Kiran"; // Local variable
  console.log("Hi " + name);
}
greet(); // Hi Kiran
// console.log(name); // ❌ ReferenceError: name is not defined
console.log();

// 3️⃣ Local vs Global with Same variable name

let msg = "Global Message";

function showMessage() {
  let msg = "Local Message";
  console.log(msg);
}
showMessage();
console.log(msg);
console.log();

/*
-If both global and local variables have the  same name,
-the local variable takes priority inside the  function (called shadowing).
*/

//5️⃣ Changing global variable from local/inside

let count = 0;

function increase() {
  count++;
}
increase();
increase();
console.log(count);

/*
✅ Works fine, but use it carefully —
too many functions modifying globals = confusing bugs.
*/

/*
✅ Key Points Summary

-Variables declared outside any function = global.
-Variables declared inside a function / block = local.
-Local variables shadow global ones with the same name.
-Be careful when modifying global variables inside functions.

*/
