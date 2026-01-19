// 1.shallow copy
// Nested objects/arrays are still referenced (not fully cloned).

// a) using spread operator(...)
let obj = { a: 1, b: { c: 2 } };
let copy = { ...obj };

// so after spreading
/*
let copy = {
  a: 1,             // copied by value
  b: obj.b          // copied by reference (shared object)
};

*/
copy.a = 100;
copy.b.c = 200;

console.log(obj.a); // 1  (safe, primitive copied)
console.log(obj.b.c); // 200 (unsafe, nested object linked!)

//b) Using Object.assign()

let obj1 = { a: 10, b: { c: 30 } };
let copy1 = Object.assign({}, obj1);

// so after assign
/*
let copy1 = {
  a: 1,             // copied by value
  b: obj.b          // copied by reference (shared object)
};

*/
copy1.a = 500;
copy1.b.c = 1000;

console.log(obj1.a); // 10 safe
console.log(obj1.b.c); // 1000 still reference

/*
✅ When to use?
-For simple objects with no nested data.
-Common in everyday coding when deep nesting isn’t an issue.
*/

// 2 deep copy
/*
A deep copy duplicates everything, including nested objects/arrays.
Changes in copy don’t affect original at all.
*/

// Methods for Deep Copy:
//a) JSON Method (Easy, but Limited)

let obj3 = { a: 40, b: { c: 50 }, d: undefined };
let deepCopy = JSON.parse(JSON.stringify(obj3));

// JSON.stringify(obj3) → turns the object into a string: => '{"a":40,"b":{"c":50},"b":"undefined"}'
// JSON.parse(...) → turns that string back into a brand new object in memory. => deepCopy = { a: 40, b: { c: 50 },b:undefined}
// JSON.stringify converts a Date object to a string in ISO format.
deepCopy.a = 4000;
deepCopy.b.c = 5000;

console.log(obj3);
console.log(deepCopy);
console.log(obj3.a);
console.log(obj3.b.c);

// ❌ Limitations:

// Can’t copy functions, undefined, Symbol, Date, Map, Set, etc.

//b) Structured Clone (Modern JS)

let obj4 = { a: 55, b: { c: 66 }, d: new Date(), E: undefined };
let deepCopy2 = structuredClone(obj4);

deepCopy2.b.c = 999;

console.log(obj4);
console.log(deepCopy2);
console.log(obj4.a);
console.log(obj4.b.c);
console.log(obj4.d === deepCopy2.d);

// ✅ Handles Date, Map, Set, ArrayBuffer, etc.
// ❌ Not supported in older browsers.

// c) 3. Using Libraries (Real-World)

// Lodash: _.cloneDeep(obj)

// (_) it just variable name instead of naimg loaddash it is you can written _
const _ = require("lodash");

const user3 = {
  name: "Kiran",
  address: { city: "Mumbai" },
  birth: new Date(),
  skills: ["JS", "React"],
};
const copy4 = _.cloneDeep(user3);

// modifying copy
copy4.address.city = "Pune";
copy4.skills.push("Node.js");

console.log(copy4);
console.log(user3.address.city);
console.log(user3.skills);
console.log(copy4.birth instanceof Date);
/*
=========================================
📝 Object Copying in JavaScript – Notes
=========================================

🔹 Assignment (=)
- Just reference, NOT a copy
- Both variables point to same memory
- Changes in one affect the other

Example:
let obj1 = { name: "Kiran" };
let obj2 = obj1;
obj2.name = "Patil";
console.log(obj1.name); // "Patil" (linked)

-----------------------------------------

🔹 Shallow Copy
- Top-level copied only
- Nested objects still linked

Methods:
1) Spread operator
   let copy = { ...obj };

2) Object.assign
   let copy = Object.assign({}, obj);

✅ Fast, simple
❌ Not safe for nested objects

-----------------------------------------

🔹 Deep Copy
- Full independent clone (no shared refs)

Methods:
1) JSON.parse(JSON.stringify(obj))
   ✅ One-liner
   ❌ Loses Date, Map, Set, functions, undefined, Symbol

2) structuredClone(obj)
   ✅ Modern, handles Date, Map, Set
   ❌ Not in older browsers

3) Lodash cloneDeep(obj)
   ✅ Reliable, industry standard
   ❌ Extra dependency

4) Custom recursive function
   ✅ Great for interviews
   ❌ More code, may miss edge cases

-----------------------------------------

🔹 Key Points (Interview Must-Know)
- Assignment → same reference
- Shallow copy → only first level
- Deep copy → fully independent
- Performance: deep copy is slower
- Use structuredClone or cloneDeep in real-world
- Show recursive deep copy in interviews


/*
========================
📌 Test Object
========================
*/
let obje = {
  num: 1,
  str: "hello",
  date: new Date(),
  arr: [1, 2, 3],
  nested: { x: 10 },
  func: () => "hi",
  undef: undefined,
  sym: Symbol("id"),
};

/*
========================
📌 Spread Operator { ...obj }
========================
- num, str → ✅ copied
- date → ❌ reference copied (same Date object)
- arr → ❌ reference copied (changes affect both)
- nested → ❌ reference copied (changes affect both)
- func → ✅ copied by reference (works, but same function)
- undef → ✅ preserved
- sym → ✅ preserved if enumerable
- moderna way
⚠️ Shallow copy → nested objects/arrays still linked.


========================
📌 Object.assign({}, obje)
========================
- num, str → ✅ copied
- date → ❌ reference copied
- arr → ❌ reference copied
- nested → ❌ reference copied
- func → ✅ copied by reference
- undef → ✅ preserved
- sym → ✅ preserved if enumerable
- older way es5
⚠️ Behavior = same as spread (shallow).


========================
📌 JSON.parse(JSON.stringify(obje))
========================
- num, str → ✅ copied
- date → ❌ becomes string (lost Date type)
- arr → ✅ deeply copied
- nested → ✅ deeply copied
- func → ❌ removed
- undef → ❌ removed
- sym → ❌ removed

⚠️ True deep copy, but loses special types.


========================
📌 Lodash _.cloneDeep(obje)
========================
- num, str → ✅ copied
- date → ✅ preserved as Date
- arr → ✅ deeply copied
- nested → ✅ deeply copied
- func → ✅ copied by reference
- undef → ✅ preserved
- sym → ✅ preserved

⚠️ Best all-around solution, but needs lodash library.


========================
📌 structuredClone(obje)
========================
- num, str → ✅ copied
- date → ✅ preserved as Date
- arr → ✅ deeply copied
- nested → ✅ deeply copied
- func → ❌ removed
- undef → ✅ preserved
- sym → ❌ removed

⚠️ Built-in modern deep copy (no lib), but loses func + symbol.


========================
📌 Quick Summary Table
========================
| Method                | Deep?  | Date | Nested Obj/Arr | Func | Undefined | Symbol |
|-----------------------|--------|------|----------------|------|-----------|--------|
| Spread { ...obje }     | No     | Ref  | Ref            | Ref  | ✅        | ✅     |
| Object.assign         | No     | Ref  | Ref            | Ref  | ✅        | ✅     |
| JSON.parse/stringify  | Yes    | ❌   | ✅             | ❌   | ❌        | ❌     |
| Lodash _.cloneDeep    | Yes    | ✅   | ✅             | Ref  | ✅        | ✅     |
| structuredClone       | Yes    | ✅   | ✅             | ❌   | ✅        | ❌     |


*/
