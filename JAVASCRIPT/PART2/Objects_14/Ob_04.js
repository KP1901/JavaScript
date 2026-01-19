// STEP 5: Looping over Objects (VERY IMPORTANT)

/*
1️⃣ Why do we loop objects?

Objects don’t have indexes like arrays.
So we loop keys, not positions.

const user = {
  name: "Kiran",
  age: 28,
  city: "Pune"
};
*/

let user = {
  name: "Ajit",
  age: 26,
};

// 2️⃣ for...in loop (MAIN WAY)

for (const key in user) {
  console.log(key, user[key]);
}

/*

3️⃣ Why NOT dot inside loop ❌
for (let key in user) {
  console.log(user.key); // ❌ undefined
}


Because:

key is a variable

Dot looks for literal "key"

✔️ Always:

user[key]

*/

// 4️⃣ Object.keys() => returns all keys of object

Object.keys(user);

// you can loop it return keys in array

Object.keys(user).forEach((key) => {
  console.log(key, user[key]);
});

// 5️⃣ Object.values() => returns all keys of values

Object.values(user);

// 6️⃣ Object.entries() (VERY POWERFUL)

console.log(Object.entries(user));

// Loop :

for (let [key, value] of Object.entries(user)) {
  console.log(key, value);
}

/*
| Use case           | Method             |
| ------------------ | ------------------ |
| Simple object loop | `for...in`         |
| Need keys array    | `Object.keys()`    |
| Need values only   | `Object.values()`  |
| Key + value pairs  | `Object.entries()` |


*/