// Example demonstrating Set iterators: keys(), values(), entries()

// Step 1: Create a Set (duplicates will be removed automatically)
const s = new Set([1, 2, 3, 3, 4, 4]);

console.log("Original Set:", s);

// ---------------------------
// keys()
// ---------------------------
// In Set, keys() returns the same as values()

console.log("\nUsing keys():");

for (const key of s.keys()) {
  console.log(key);
}

// ---------------------------
// values()
// ---------------------------
// Returns all values from the Set

console.log("\nUsing values():");

for (const value of s.values()) {
  console.log(value);
}

// ---------------------------
// entries()
// ---------------------------
// Returns [value, value] pairs

console.log("\nUsing entries():");

for (const [key, value] of s.entries()) {
  console.log(key, value);
}

// ---------------------------
// Direct iteration (most common)
// ---------------------------
// Set is iterable, so this uses values() internally

console.log("\nUsing for...of directly:");

for (const value of s) {
  console.log(value);
}
