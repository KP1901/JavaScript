/*
🧠 Definition:

The return statement ends the function and sends a value back to wherever the function was called.

When a function hits return:

-The function stops executing immediately.
-The value after return is sent back to the caller.
-Anything written after return is ignored.

*/

// Example 1: Simple Return

function add(a, b) {
  return a + b;
}
let sum = add(5, 3);
console.log(sum);

// Example 2: Code after return is ignored

function testReturn() {
  console.log("Before return");
  return "Returned value";
  console.log("After return");
}
console.log(testReturn());
console.log();

// Example 3: Return inside condition

function checkNumber(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  }
  return "Zero";
}
console.log(checkNumber(5));
console.log();

// Example 4: Returning Expressions

function makeUser(name, age) {
  return {
    userName: name,
    userAge: age,
  };
}
let user = makeUser("kiran", 25);
console.log(user);

/*
✅ Key Points Summary

-return stops execution and sends back a value.

-Code after return never runs.

-A function with no return automatically returns undefined.

-You can return any data type (number, string, array, object, etc.).
*/
