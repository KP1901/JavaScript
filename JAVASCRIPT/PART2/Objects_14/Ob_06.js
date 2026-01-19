// STEP 7: Object Destructuring (VERY PRACTICAL)

// Destructuring = extract values from object into variables

// 1️⃣ Without destructuring (old way)

const user = {
  name: "kiran",
  age: 26,
  city: "Udgir",
};

const userName = user.name;
const userAge = user.age;

// 2️⃣ With destructuring (modern JS) && order doesn't matter && it is like variable so you are not adding (contact)

const { name, city, age, contact = 2133123223 } = user;

console.log(name);
console.log(city);
console.log(user);
console.log(contact);

// 📌 Variable names MUST match keys.

// 4️⃣ Rename while destructuring

const { name: userNa } = user;

console.log(userNa); // "Kiran"

// 5️⃣ Default values

const userSetting = {
  notification: false,
  theme: "dark",
};

const { theme = "black" } = userSetting;

console.log(theme);

// 6️⃣ Destructuring in function parameters (VERY IMPORTANT)

function printSettings({ notification, theme }) {
  console.log(notification, theme);
}
printSettings(userSetting);
