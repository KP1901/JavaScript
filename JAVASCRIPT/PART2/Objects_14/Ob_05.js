// STEP 6: Object Reference & Copying (⚠️ CRITICAL CONCEPT)

// 1️⃣ Objects are NOT copied like numbers

// Primitive (copied by value)

let a = 10;
let b = a;

b = 20;

console.log(a);

// ✔️ Independent copies

// 2️⃣ Objects are copied by REFERENCE

const obj1 = { x: 1 };
const obj2 = obj1;

obj2.x = 2;

console.log(obj1.x);

// ❗ Both variables point to the same object in memory

/*
3️⃣ Mental model (IMPORTANT)

obj1 ─┐
      ├── { x: 1 }
obj2 ─┘


Changing through any reference affects the same object.

*/

/*

4️⃣ Real-world bug example

function updateUser(user) {
  user.age = 30;
}

const user = { name: "Kiran", age: 28 };

updateUser(user);

console.log(user.age); // 30 (changed!)


📌 Function didn’t “return” anything,
but object still changed.

*/

// 5️⃣ How to COPY an object (shallow copy)

// 1. Using spread operator (MOST COMMON)

const original = { a: 1, b: 2 };
const copy = { ...original };

copy.a = 99;

console.log(original.a); // because both are different

// 2. using Object.assign()

/*

Object.assign() is a built-in JavaScript method used to copy properties from one or more source objects into a target object.

syntax of Object.assign()

Object.assign(target, source1, source2, ...)

target → object where properties will be copied
sources → objects whose properties will be copied

It copies enumerable own properties from source → target.

*/

// Example 1

const obje1 = { a: 1 };
const obje2 = { b: 2 };

const result = Object.assign({}, obje1, obje2);

console.log(result);

// Example 2

const user1 = {
  a: 1,
  b: { name: "kiran" },
};

const copy = Object.assign({}, user1);

// copy.a = 30; // changes only in copy
copy.b.name = "ajit"; // changes both in original and copy

console.log(user1);
console.log(copy);

// Example 3

const bos1 = {
  a: 1,
  v: { name: "kiran" },
};

const bos2 = {
  b: 2,
  k: { name: "Ajit" },
};

const result1 = Object.assign({}, bos1, bos2);

result1.a = 30;
result1.b = 50;
result1.k.name = "Joe";

console.log(bos1);
console.log(bos2);
console.log(result1);

/*
Correct statement (your line refined)

Only the top level is copied
-name is copied
-address is shared (means pointing same reference) even though user is not give to copy
- copy.address.city === user.address.city
✔️ 100% correct

Shallow copy means:

Only the first level properties are copied, but nested objects (level 2, level 3, etc.) still reference the same object, so changes in nested objects affect both.
*/

// 7️⃣ Deep copy (safe)

// so there are three ways to achieve deep copy

// 1. structuredClone()

const ob1 = {
  name: "Alexander",
  age: 30,
  details: { location: "udgir" },
};

const deepCopy = structuredClone(ob1);

deepCopy.name = "AJ";
deepCopy.details.location = "latur";

console.log(ob1);
console.log(deepCopy);

// Now they are completely separate objects.

// 2 . Json method

const ob2 = {
  name: "Alexander",
  age: 30,
  details: { location: "udgir" },
};
const deepCopy1 = JSON.parse(JSON.stringify(ob2));

deepCopy1.name = "Bay";
deepCopy1.details.location = "sydney";

console.log(ob2);
console.log(deepCopy1);

/*
⚠️ But this fails for

-functions
-Date
-Map
-Set
-undefined
*/

// 3.manual deep copy method

const ob3 = {
  a: 1,
  b: {
    name: "kiran",
    d: { location: "delhi" },
  },
};

const deepCopy2 = {
  ...ob3,
  b: {
    ...ob3.b,
    d: { ...ob3.b.d },
  },
};

deepCopy2.a = 30;
deepCopy2.b.name = "ajit";
deepCopy2.b.d.location = "Singapur";

console.log(ob3);
console.log(deepCopy2);
