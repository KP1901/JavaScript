// explicit

//  1 string to number

let str1 = "kiran";
let res1 = Number(str1);
console.log(res1); // NaN
console.log(typeof res1); // number
console.log("\n");

//  1 string to number

str1 = "5";
res1 = Number(str1);
console.log(res1); // 5
console.log(typeof res1); // number
console.log("\n");

// case 1 -String to number

let emptyStr = "";
let res3 = Number(emptyStr);
console.log(res3); //0
console.log(typeof res3); // number
console.log("\n");

// 3 boolean to number
let isLoggedIn = true;
let res2 = Number(isLoggedIn);
console.log(res2); // 1
console.log(typeof res2); // Number
console.log("\n");

// 4 . number to boolean

// truthy values => false, 0, -0, 0n, "", null, undefined, NaN other than this considered truthy values
// imp -> "  " is not an falsy value its truthy

let value = "i";
let isBoolean = Boolean(value);
console.log(isBoolean); // true
console.log(typeof isBoolean); // Boolean

// 🔄 JavaScript Data Type Conversion – Edge Cases (Explicit)
// ------------------------------------------------------------

// 🔢 Number() Conversion Edge Cases
// ---------------------------------
console.log(Number("")); // 0        → empty string
console.log(Number(" ")); // 0        → whitespace trimmed
console.log(Number("123abc")); // NaN      → invalid numeric string
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number([])); // 0
console.log(Number([123])); // 123
console.log(Number([1, 2])); // NaN
console.log(Number({})); // NaN
console.log(Number(function () {})); // NaN
// console.log(Number(10n));       // ❌ TypeError → cannot mix BigInt with Number

// 🧵 String() Conversion Edge Cases
// ---------------------------------
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String(true)); // "true"
console.log(String(false)); // "false"
console.log(String(123)); // "123"
console.log(String([])); // ""
console.log(String([123])); // "123"
console.log(String([1, 2])); // "1,2"
console.log(String({})); // "[object Object]"
console.log(String(function () {})); // "function(){}"
console.log(String(Symbol("a"))); // "Symbol(a)"
// console.log("Hello " + Symbol("a")); // ❌ TypeError (use String() explicitly)

// 🔘 Boolean() Conversion Edge Cases
// ----------------------------------
// ❌ Falsy values (convert to false)
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(0n)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// ✅ Everything else is truthy
console.log(Boolean(" ")); // true
console.log(Boolean("0")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(function () {})); // true
console.log(Boolean(Infinity)); // true
console.log(Boolean(-Infinity)); // true
console.log(Boolean(Symbol())); // true

// 🧠 Strange and Real-World Cases
// -------------------------------
// Array to Number
console.log(Number([])); // 0
console.log(Number([1])); // 1
console.log(Number([1, 2])); // NaN

// Object to Number
console.log(Number({})); // NaN
console.log(Number({ a: 1 })); // NaN

// null and undefined
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

// Booleans in Arithmetic
console.log(true + true); // 2
console.log(true * 5); // 5
console.log(false + 1); // 1

// 🔁 Custom Object Conversion
const obj = {
  valueOf() {
    return 42;
  },
  toString() {
    return "hello";
  },
};
console.log(Number(obj)); // 42
console.log(String(obj)); // "hello"
