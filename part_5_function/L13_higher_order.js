// higher order => take another function as argument / return function as a result

// const { act } = require("react");

// 1. assign to variable

const greet = function () {
  console.log("hello");
};
greet();

// 2. passed as an argument

function callWithGreeting(callbackFunction) {
  callbackFunction();
}

callWithGreeting(function () {
  console.log("hi there!");
});

// 🔹 3. Return from Functions
function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10

// 4.🔹 Functions can be stored in arrays and objects just like values.

const actions = [
  function () {
    console.log("run");
  },
  function () {
    console.log("jump");
  },
];
actions[1]; // getting index only
console.log(actions[1]); // function definition
actions[1](); // since it is function so we need call it

const obj = {
  sayHi: function () {
    console.log("he bay!");
  },
};
obj.sayHi();
// sayhi is method and assigned a function as a property
