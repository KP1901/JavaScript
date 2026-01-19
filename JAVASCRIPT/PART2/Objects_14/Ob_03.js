// STEP 3: Add, Update, Delete Object Properties

// 1️⃣ Starting object

const user = {
  name: "Kiran",
  age: 28,
};

// 2️⃣ Add a new property

user.city = "Udgir";

// 3️⃣ Update existing property

user.age = 29;

// 4️⃣ Add using bracket notation

const key = "Country";
user[key] = "India";

// 5️⃣ Delete a property

delete user.city;

// 6️⃣ Check if property exists

"age" in user;

if (age in user) {
}

// returns true / false

//📌 Objects are mutable (can change after creation).
