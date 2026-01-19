// STEP 12: Object Comparison ( === vs deep compare )

// 1️⃣ Primitive comparison (easy case)

let age1 = 20;
let age2 = 20;

console.log(age1 == age2); // in primitve are compared by value

// 2️⃣ Object comparison (BIG surprise)

let user1 = {
  name: "kiran",
};
let user2 = {
  name: "kiran",
};

console.log(user1 == user2); // non primitive are compare by reference

// 3️⃣ So how do we compare objects? (by value)

// Option 1: Compare properties manually (basic)

function isEqual(user1, user2) {
  return user1.name == user2.name;
}
console.log(isEqual(user1, user2));

/*
✔️ Simple
❌ Not scalable
 */

// Option 2: JSON.stringify() (basic deep compare)

console.log(JSON.stringify(user1) === JSON.stringify(user2));

/*
⚠️ Works only if:

-Same key order
-No functions
-No undefined
 */

// option 3 :
console.log(Object.entries(user1, user2));

/*
4 When === is correct for objects

Checking if two variables point to same object
State comparison
Cache checks

*/
