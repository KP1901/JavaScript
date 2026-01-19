/*
🔹 1. Function Declaration
✅ Task: Write a function sayHello that prints "Hello, Developer!".
*/
function sayHello() {
  console.log("Hello , Developer");
}

sayHello();

/*
🔹 2. Function Expression
✅ Task: Create a function expression that returns the square of a number.
*/

const square = function (a) {
  return a * a;
};
console.log(square(10));

/*
🔹 3. Arrow Function
✅ Task: Convert the following function to an arrow function.


function multiply(a, b) {
  return a * b;
}

*/
const multiply = (a, b) => a * b;
console.log(multiply(10, 20));

/*
🔹 4. Named Function Expression
✅ Task: Create a named function expression called factorial that returns the factorial of a number.
*/

const factorial = function getFactorial(num) {
  let fact = 1;
  for (let i = num; i >= 1; i--) {
    fact = fact * i;
  }
  return fact;
};
console.log(factorial(5));

/*
🔹 5. Anonymous Function (Callback)
✅ Task: Pass an anonymous function as a callback to setTimeout that logs "Timer Done" after 1 second.
*/

setTimeout(function () {
  console.log("timer done");
}, 1000);
