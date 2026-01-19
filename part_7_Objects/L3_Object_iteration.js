/*
🔑 Core Concepts of Object Iteration
1. for...in loop

-iterates over enumerable properties (keys) of an object.
-Includes inherited enumerable properties (from prototype chain).

*/
// 1.-------------- for in loop-------------
// a. one presepective
const person = { name: "kiran", age: 25 };

for (let key in person) {
  console.log(key, person[key]);
}
// b. 2nd presepective
Object.prototype.country = "India";

for (let key in person) {
  console.log(key, person[key]);
}

// so fo this if you want to check wehter is this own property

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key);
  }
}

// 2.-----object keys---------

// Returns an array of keys (own, enumerable only).

const person1 = { name: "kiran", age: 25 };
console.log(Object.keys(person));

Object.prototype.address = "latur";

Object.keys(person).forEach((key) => {
  console.log(key, person[key]);
});
// 👉 Safer than for...in since it avoids prototype pollution.

// 3. object.values()
// Returns an array of values.

const user = {
  name: "kiran",
  age: 25,
};
console.log(Object.values(user));

// 4. Object.entries()

// Returns an array of [key, value] pairs.
// Very useful for iteration with for...of.

const person2 = { name: "leon", age: 30 };
console.log(Object.entries(person2));
for (const [key, value] of Object.entries(person2)) {
  {
    console.log(key, value);
  }
}
// 5. OObject.getOwnPropertyNames()
/*
-Returns an array of property names that belong directly to the object.
-It includes enumerable and non-enumerable properties.
-But it only returns names (keys), not the values.
*/
const obj = Object.create(
  {},
  {
    hidden: { value: 42, enumerable: false },
    hi: { value: 30, enumerable: true },
  }
);
console.log(Object.getOwnPropertyNames(obj)); // ["hidden"]

// Once you have the name, you can access the value with normal property access:

const props = Object.getOwnPropertyNames(obj);
console.log(obj[props[1]]);
