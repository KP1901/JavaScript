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

const copy1 = Object.assign({}, original);

// 6️⃣ Shallow copy problem ⚠️

const user = {
  name: "Kiran",
  address: { city: "Pune" },
};

const copy = { ...user };

copy.address.city = "Mumbai";

console.log(user.address.city); // "Mumbai" ❌

/*
Correct statement (your line refined)

Only the top level is copied
-name is copied
-address is shared (means pointing same reference) even though user is not give to copy
- copy.address.city === user.address.city
✔️ 100% correct
*/

// 7️⃣ Deep copy (safe)

const obj2 = {
  name: "Alexander",
  age: 30,
};
const deepCopy = structuredClone(obj2);

// so now obj2 and deepCopy are both different reference so they are not pointing each other they just copied 