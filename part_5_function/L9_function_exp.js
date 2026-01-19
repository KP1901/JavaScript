// 1 . basic
let greet = function () {
  console.log("Hello!");
};
greet();

// 📌 Why Use Function Expressions?

// 🔸 1. Store in a variable or property

// function expression with property )in object
let obj = {
  user: "iran",
  greet: function () {
    console.log("Hi my name is kiran", this.user);
  },
};
obj.greet();

// to store variable value

let result = function () {
  let a = 10;
  let b = 10;
  console.log(a * b);
};
result();

//  2. Pass as argument (callback)

setTimeout(function () {
  console.log("hi");
}, 1000);

// so here anonymous function expressions passed as a argument (here it works like callback function because after 1s called it late)

// 3. Return functions from other functions (closure)

function outer() {
  return function () {
    console.log("inner");
  };
}
const inner = outer();
inner();

// 🔸 4. Use in conditionals
let age = 19;
const re =
  age > 18
    ? function () {
        console.log("eligible");
      }
    : function () {
        console.log("eligible");
      };
re();
