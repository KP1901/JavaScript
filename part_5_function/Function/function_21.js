/*
🔍 find() — Recap

find() → returns the first match in an array that satisfies a condition.
If nothing matches → returns undefined.
*/

// ✅ Example — Find a product by ID

const products = [
  { id: 1, name: "Keyboard", price: 1200 },
  { id: 2, name: "Mouse", price: 6000 },
  { id: 3, name: "Monitor", price: 500 },
];

const found = products.find((product) => {
  return product.price >= 1000;
});
console.log(found);

// 💼 Example 2 — Check if any product is out of stock

const inventory = [
  { item: "Laptop", inStock: true },
  { item: "Keyboard", inStock: false },
  { item: "Mouse", inStock: false },
];

const checkFirstMatch = inventory.find((p) => {
  return !p.inStock;
});
console.log(checkFirstMatch);
