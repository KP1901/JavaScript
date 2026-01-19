// 1️⃣ We already have an object

const user = {
  name: "Kiran",
  age: 28,
  city: "Pune",
};

// 2️⃣ Dot notation (MOST COMMON)

user.age;

// 3️⃣ Bracket notation (VERY IMPORTANT)
user["name"]; // "Kiran"
user["age"]; // 28

// 4️⃣ WHY bracket notation exists (CRITICAL)

// Case 1: Key has space ❌ dot fails
const user1 = {
  "full name": "Kiran Patodekar",
};

// user.full name;      // ❌ ERROR
user["full name"]; // ✅

// case 2: Dynamic key (dot CANNOT do this)

const key = "city";

user.key;        // ❌ undefined
user[key];       // ✅ "Pune"

/*
📌 Dot always looks for literal property name
📌 Bracket evaluates the variable

*/

/*

5️⃣ Mental model (lock this)
user.name   // fixed → "name"
user[key]   // dynamic → value of key variable


If key comes from:

-user input
-loop
-variable
👉 You MUST use brackets

*/

/*

6️⃣ Accessing missing properties
user.country;      // undefined
user["country"];   // undefined


⚠️ No error, just undefined

 */