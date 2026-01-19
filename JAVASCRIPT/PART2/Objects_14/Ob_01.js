/*

1️⃣ First, understand the problem Objects solve

Without objects, data looks like this 👇

let name = "Kiran";
let age = 28;
let city = "Pune";


❌ Problem:

Data is scattered
Hard to pass around
No clear relationship

2️⃣ Object = group related data together

let user = {
  name: "Kiran",
  age: 28,
  city: "Pune"
};

3️⃣ How to read this object (VERY IMPORTANT)
{
  name: "Kiran",
  age: 28,
  city: "Pune"
}

user → variable name

{} → object container

name, age, city → keys / properties

"Kiran", 28, "Pune" → values

👉 Rule:
Keys are strings (internally)
Values can be ANYTHING

*/

// 4️⃣ Values allowed inside objects

let example = {
  text: "Hello",
  count: 5,
  isActive: true,
  list: [1, 2, 3],
  info: { a: 1 },
  greet() {}, // shorthand method
  sayHi: function () {}, //anonymous function expression method
  sayHello: () => {}, // arrow function (but still method)
};

// 📌 Object is the most powerful data type in JS.

/*

6️⃣ Small but critical rules

✔️ Keys can be written without quotes:

{ name: "Kiran" }


✔️ Keys WITH spaces need quotes:

{ "full name": "Kiran Patodekar" }


✔️ Trailing comma is allowed:

{ a: 1, b: 2, }

*/
