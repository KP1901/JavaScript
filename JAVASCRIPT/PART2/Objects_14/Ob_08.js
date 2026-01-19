// STEP 9: Objects + Arrays (REAL-WORLD DATA)

// 1️⃣ Array of objects (MOST COMMON PATTERN)

const users = [
  { id: 1, name: "A", age: 20 },
  { id: 2, name: "B", age: 25 },
  { id: 3, name: "C", age: 30 },
];

/*
👉 One array
👉 Many objects
👉 Each object = one entity
*/

// 2️⃣ Accessing data

console.log(users[0].name);

// 3️⃣ Looping array of objects

for (const user of users) {
  //   console.log(user);
}

// 4️⃣ Using array methods (modern)

const newUser = users.map((user) => ({
  ...user,
  name: user.name.toLowerCase(),
}));

console.log(newUser);

/*
 newObject = {
  copy everything from user,
  then replace name
}

=> {} is treated as a function body
Using () tells JavaScript this {} is an object
copying object  = {...user}
*/
// 5️⃣ convert object → array → object

let profile = {
  userName: "kiran",
  userAge: 26,
};

const entries = Object.entries(profile);
const back = Object.fromEntries(entries);
console.log(back);

// 5️⃣ Check property existence (better way)

console.log(profile.hasOwnProperty("userName"));
