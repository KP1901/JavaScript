/*

🧩 Next: some() — Boolean Checker
🔹 Definition

some() checks if at least one element in the array satisfies the condition.

It returns:

✅ true → if any element matches

❌ false → if none match
*/

// ⚙️ Example 1 — Check if any number is negative

const numbers = [-1, 3, 5];

const checkNeg = numbers.some((num) => {
  return num < 0;
});
console.log(checkNeg);

// 🧠 Example 2 — Validate Login Input

const user = [
  {
    userName: "d",
    password: "12345",
    email: "kiran@gmail.com",
  },
];
const checkLoggedIn = user.some((k) => {
  return k.userName !== "" && k.password !== "" && k.email !== "";
});
console.log(checkLoggedIn);
