// 🔹 JavaScript Operators - Complete In-Depth Guide
// ================================================

// 🔸 1. Arithmetic Operators
// --------------------------
let x = 10;
let y = 3;

console.log(x + y); // 13 → addition
console.log(x - y); // 7  → subtraction
console.log(x * y); // 30 → multiplication
console.log(x / y); // 3.333... → division
console.log(x % y); // 1  → remainder
console.log(x ** y); // 1000 → exponentiation (10^3)

// 🔸 2. Assignment Operators
// --------------------------
let a = 5;
a += 2; // a = a + 2 → 7
a -= 1; // a = a - 1 → 6
a *= 3; // a = a * 3 → 18
a /= 2; // a = a / 2 → 9
a %= 4; // a = a % 4 → 1
a **= 2; // a = a ** 2 → 1

// 🔸 3. Comparison Operators
// --------------------------
// Returns true/false (boolean)
console.log(5 == "5"); // true → loose equality (type coercion)
console.log(5 === "5"); // false → strict equality (type + value)
console.log(5 != "5"); // false
console.log(5 !== "5"); // true
console.log(10 > 5); // true
console.log(10 >= 10); // true
console.log(3 < 5); // true
console.log(5 <= 5); // true

// 🔸 4. Logical Operators
// -----------------------
// Short-circuiting behavior
console.log(true && false); // false → AND
console.log(true || false); // true  → OR
console.log(!true); // false → NOT
// and may false tak search karta hai aur agar false end may toh end print karega
// or may true serach karta agar true paile tu paila he print karega aur true pialine nhi mila sidha last mila toh last search karega

// Short-circuiting examples
let result = true || console.log("won't run"); // true
result = false || console.log("runs this"); // logs "runs this"

/*
Final simple rule (MEMORIZE THIS)

Short-circuit works only inside the same operator chain.

All || → stops at first true
All && → stops at first false
Mixed (&& + ||) → result of first part is passed to next operator

console.log(2 || 1 && 1 || 0 && 3); (below)
so its like console.log(2 || 1 || 0 );
Rule (very important)

👉 All && parts are evaluated first
because && has higher priority than ||.
*/

// 🔸 5. Unary Operators
// ---------------------
let p = 5;
console.log(-p); // -5 → negation
console.log(+true); // 1  → coerces to number
console.log(typeof "JS"); // "string"

// 🔸 6. Ternary Operator (?:)
// ---------------------------
let age = 20;
let msg = age >= 18 ? "Adult" : "Minor";
console.log(msg); // "Adult"

// 🔸 7. Nullish Coalescing Operator (??)
// --------------------------------------
let name = null;
let defaultName = name ?? "Guest"; // if name is null or undefined
console.log(defaultName); // "Guest"

/*
✅ Key Takeaways

Nullish =skip only null or undefined.

It does not include other falsy values like 0, "", or false.

When the real value is missing (only null or undefined), then you should fall back to the right value.

Correct rule to remember 🧠

When you want to skip falsy values → use ||
When you want to skip only null or undefined → use ??
*/

// 🔸 9. Bitwise Operators
// -----------------------
console.log(5 & 1); // 1 → AND
console.log(5 | 1); // 5 → OR
console.log(5 ^ 1); // 4 → XOR
console.log(~5); // -6 → NOT (inverts bits)
console.log(5 << 1); // 10 → left shift
console.log(5 >> 1); // 2 → right shift

// 🔸 10. typeof and instanceof
// ----------------------------
console.log(typeof "Hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof null); // "object" ❗(quirk)
console.log(typeof undefined); // "undefined"

let arr = [];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true

// 🔸 11. delete Operator
// ----------------------
let obj = { name: "Krish", age: 25 };
delete obj.age;
console.log(obj); // { name: "Krish" }

// 🔸 12. in Operator
// ------------------
console.log("name" in obj); // true
console.log("age" in obj); // false

let o1 = { a: 1 };
let o2 = { ...o1, b: 2 }; // { a: 1, b: 2 }

// 🔸 15. Comma Operator (,)
let n = (1, 2, 3); // n = 3 (last value)
console.log(n);

// 🔸 16. typeof null is "object" (quirk)
console.log(typeof null); // "object" ❗

// 🔸 17. Logical Assignment (ES2021)
let val1 = null;
val1 ??= "default"; // if null or undefined, assign
console.log(val1); // "default"

let val2 = "";
val2 ||= "fallback"; // if falsy, assign
console.log(val2); // "fallback"

// 🔸 18. Destructuring with default
let { a: aa = 10 } = {}; // aa = 10

// 🔸 19. Operator Precedence
// ---------------------------
let result2 = 5 + 10 * 2; // 25 → * runs before +
let grouped = (5 + 10) * 2; // 30

// 🔸 20. Chaining vs Grouping
let person = null;
console.log((person && person.name) || "No person"); // "No person"

// 🔸 Edge Case: Loose Equality
console.log([] == 0); // true
console.log("" == 0); // true
console.log(null == undefined); // true
console.log([] == false); // true
console.log([] == ![]); // true
console.log({} == {}); // false (different references)

// 🔸 Want more?
// Use console.table, Object.is(), and JSON.stringify to debug and inspect.
