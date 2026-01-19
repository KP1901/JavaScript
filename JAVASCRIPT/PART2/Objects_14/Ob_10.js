// STEP 11: Object Immutability (freeze, seal, safe update)

/*
1️⃣ What “immutability” means (plain English)

👉 Immutable = cannot be changed

By default, JavaScript objects ARE mutable (changeable).

*/

const user = { name: "Kiran" };
user.name = "Rahul"; // ✅ allowed

/*
2️⃣ Object.freeze() ❄️ (FULL LOCK)
What it does

❌ Cannot add properties
❌ Cannot update properties
❌ Cannot delete properties
*/

const userProfile = { name: "Kiran" };

Object.freeze(userProfile);

// userProfile.name = "ajit";
// userProfile.age = 28;
// delete userProfile.name;

// console.log(userProfile);

/*
3️⃣ Object.seal() 🔒 (PARTIAL LOCK)
What it does

✅ Can update existing properties
❌ Cannot add new properties
❌ Cannot delete properties

*/

const aadhar = {
  name: "kiran",
  age: 26,
};

Object.seal(aadhar);

// aadhar.age = 28;
// aadhar.address = "udgir";
// delete aadhar.age;

// console.log(aadhar);

/*
 4️⃣ Freeze vs Seal (very important table)

| Action       | freeze | seal |
| ------------ | ------ | ---- |
| Update value | ❌      | ✅    |
| Add new key  | ❌      | ❌    |
| Delete key   | ❌      | ❌    |

 */

//  5️⃣ VERY IMPORTANT: Freeze is SHALLOW ⚠️

const user2 = {
  name: "Kiran",
  address: {
    city: "Pune",
  },
};
Object.freeze(user2);

user2.address.city = "Mumbai";

console.log(user2);

/*
Why?

-freeze only freezes top-level
-Nested objects are still mutable
*/

// 6️⃣ Modern & SAFE pattern (BEST PRACTICE)

//

const panCard = {
  name: "wonder",
  age: 26,
};

// panCard.age = 28; // bad practice

const updatedPanCard = {
  ...panCard,
  age: 28,
};

console.log(updatedPanCard);

/*
📌 Used in:

-React
-Redux
-Modern JS apps
*/

/*
8️⃣ Why immutability matters (real life)

Without immutability:

Hidden bugs
Shared references mutate data
Hard debugging

With immutability:

Predictable code
Easy debugging
Safe state updates

🔑 Core rule

Illegal object mutations fail silently in non-strict mode,
but THROW errors in strict mode.

*/