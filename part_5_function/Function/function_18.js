// 🧩 filter() — Selecting Data That Matches a Condition

/*
🧠 Concept:

filter() creates a new array containing only those elements that pass a test (the test is defined by your callback function).

So, it filters out unwanted items — it doesn’t modify the original array.

array.filter((element, index, array) => {
  return condition; // true → keep, false → discard
});

*/
// ✅ Example 1 — Basic:

const numbers = [12, 5, 8, 130, 44];

const newFilterArr = numbers.filter((num) => {
  return num >= 10;
});
console.log(newFilterArr);

// 🛒 1. E-commerce — Filter Products by Stock and Price

const products = [
  { name: "Laptop", price: 75000, inStock: true },
  { name: "Mouse", price: 500, inStock: true },
  { name: "Keyboard", price: 2500, inStock: false },
  { name: "USB Cable", price: 300, inStock: true },
];

const filteredProduct = products.filter((product) => {
  return product.inStock && product.price <= 1000;
});
console.log(filteredProduct);

// 📧 2. Email App — Filter Unread Messages

// Filtering out only unread emails from your inbox.
const inbox = [
  { subject: "Welcome!", read: true },
  { subject: "Update available", read: false },
  { subject: "Discount offer", read: false },
];

const readEmails = inbox.filter((email) => {
  return !email.read;
});
console.log(readEmails);
