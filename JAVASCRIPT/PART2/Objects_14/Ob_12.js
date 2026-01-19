/*
STEP 13: Property Descriptors
(writable, enumerable, configurable)

Every object property in JavaScript has hidden settings.

You normally don’t see them, but they control:

Can value change?
Can it be looped?
Can it be deleted?
*/

// 1️⃣ Default behavior (normal properties)

const user = {
  name: "Kiran",
  age: 26,
};

/*
By default, name is:

writable ✅
enumerable ✅
configurable ✅

user.name = "Rahul";   // update
delete user.name;     // delete

*/

/*
2️⃣ What is a Property Descriptor?

It is an object that describes how a property behaves.

you can see :

Object.getOwnPropertyDescriptor(user, "name");


*/

console.log(Object.getOwnPropertyDescriptors(user));

// 3️⃣ writable – can value change?

// writable which is already exists (imp no need to pass value)

const user1 = { name: "Kiran" };

Object.defineProperty(user1, "name", { writable: false });

// user1.name = "ajit"; // this is locked cant change

// writable for new property

Object.defineProperty(user1, "age", {
  value: 26,
  writable: true,
  enumerable: true,
  configurable: true,
});

// console.log(Object.getOwnPropertyDescriptors(user1));
console.log(user1);

// 4️⃣ enumerable – can it appear in loops?

const userProfile = { age: 27, address: "udgir" };

Object.defineProperty(userProfile, "userName", {
  value: "kiran",
  writable: true,
  enumerable: false,
  configurable: true,
});

for (const key in userProfile) {
  console.log(key);
}

// 📌 Hidden from loops, but not from access.

// 5️⃣ configurable – can it be deleted or changed?

const car = {
  name: "Audi",
  Model: "Q7",
  price: 20000000,
};

Object.defineProperty(car, "price", {
  configurable: false,
});

// delete car.price; // you cant delete because descriptor(configurable) is set to false

console.log(car);

// 6️⃣ Example: read-only constant property

const configure = {};

Object.defineProperty(configure, "API_URL", {
  value: "https://api.example.com",
  writable: false,
  enumerable: true,
  configurable: false,
});

/*
✔️ Used in configs
✔️ Safe from accidental change

*/

/*
7️⃣ Relation with freeze and seal

Internally:

Object.freeze()
→ writable ❌, configurable ❌

Object.seal()
→ configurable ❌, writable ✅

Descriptors explain why freeze & seal behave that way.

🔑 Mental model (lock this)

| Descriptor   | Meaning               |
| ------------ | --------------------- |
| writable     | can change value      |
| enumerable   | visible in loops      |
| configurable | can delete / redefine |

syntax : for defining properties

Object.definedProperty(object,property name,{value,descriptors,descriptors,descriptors})


*/

const obj = {};
Object.defineProperty(obj, "x", {
  value: 10,
  writable: false,
  enumerable: false,
  configurable: false,
});

obj.x = 20;
delete obj.x;
console.log(obj);

/*
🔹 console.log
🔹 for...in
🔹 Object.keys()
🔹 JSON.stringify()

👉 All of these only show enumerable properties

*/
