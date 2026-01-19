/*
5️⃣ for...in (Key iteration)

🔑 Concept
Iterates keys (properties)

🧠 Practical Example

Display user details

let user = { name: "Kiran", age: 22 };

for (let key in user) {
  console.log(key, user[key]);
}

⚠️ Warning

❌ Avoid for arrays (order issues)
*/

let user = {
  name: "Kiran",
  age: 25,
  address: {
    city: "udgir",
  },
};

for (let key in user) {
  console.log(key, user[key]);
}
