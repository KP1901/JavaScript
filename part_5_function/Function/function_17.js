// 🧩 1️⃣ map() — Transforming Data

/*
🧠 Concept:

map() loops through every element and returns a new array where each value is transformed by the callback.

array.map((element, index, array) => {
  return something new for this element
});

*/
const number = [1, 2, 3];
const doubled = number.map(function (num) {
  return num * 2;
});
console.log(number);
console.log(doubled);

// review => satisfy rule 1 of HOF
// review => not satisfy rule 2 of HOF

// 🧠 Challenge — “Customer Name Formatter”

const customer = [
  { firstName: "kiran", lastName: "patodekar" },
  { firstName: "Ravi", lastName: "Sharma" },
  { firstName: "Rohit", lastName: "Sharma" },
];
const transformedArr = customer.map((cu) => {
  return cu.firstName.toUpperCase() + " " + cu.lastName.toUpperCase();
});
console.log(transformedArr);

// 🧠 Challenge — “Temperature Converter”

const tempsInCelsius = [0, 12, 22, 30, 40];

const tempInFar = tempsInCelsius.map((celcius) => {
  return `${(celcius * 9) / 5 + 32}`;
});
console.log(tempInFar);
