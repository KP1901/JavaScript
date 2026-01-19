/*
🌀 Higher-Order Functions (HOFs)
💡 What It Means

A higher-order function is simply a function that does one or both of these:

rule 1 -Takes another function as an argument
rule 2 -Returns a new function

*/
// rule 1
let count = 0;
function counter() {
  count++;
  console.log(count);
}

function simulateClick(callback) {
  callback();
  callback();
}

simulateClick(counter);

// rule 2

function greetFactory(greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}

const sayHello = greetFactory("Hello");
sayHello("Ajit");

const sayHi = greetFactory("Hi");
sayHi("Kiran");

// so rule 2 - A function factory is a type of Higher-Order Function (HOF).

/*
🧠 Analogy

Think of HOFs like a big family 🏠
and function factories are one member of that family who builds new functions instead of just using them.

*/

// realtime exapmle
function showInUppercase(message) {
  return message.toUpperCase();
}

function notificationManager(prefix, callback) {
  return function (message) {
    let finalMessage = callback(message);
    console.log(`${prefix} : ${finalMessage}`);
  };
}
// ❌ 2️⃣ You passed the callback (showInUppercase) but didn’t use it inside notificationManager. (this was the mistake)
const errorMessage = notificationManager("Error", showInUppercase);
errorMessage("Not Found");

// 