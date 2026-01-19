// 🔹 1. Identical primitive Strings

let a = "hello";
let b = "hello";
console.log(a == b); //primitive compared by values
console.log(a === b); // compared by datatype first if(true) and check value

/*

For primitives, == and === always operate on values.
Reference comparison exists only for objects.

 */

/*
The JS engine stores only one "hello" in memory and gives each variable the same internal reference (pointer).
 | a → 0xF1A0 |
 | b → 0xF1A0 |
 | c → 0xF1A0     
 
 JavaScript engines reuse memory for identical strings, but JavaScript itself treats them as separate primitive values during execution.


✅ Primitive values
✔ == → compares value (after type coercion)
✔ === → compares value + type for primitive and for non primitive compare only ref.

👉 Never compares reference (because primitives don’t use reference comparison)

✅ Objects (including arrays, functions, wrapper objects)
✔ == → compares reference
✔ === → compares reference

=> == performs loose equality for primitives, and performs reference comparison for objects.
=>In non-primitives, == and === behave the same: reference identity check only.

(Type is always “object” on both sides, so type-check doesn’t matter)

👉 Neither checks "value" inside the object.

Note: even if it one side primitive and another side wrapper object then type corecion happen and then values checked
 */

// 🔹 2. Only objects (including new String("...")) are compared by reference not by values.

let c = new String("javascript");
let d = new String("javascript");
d = c;
console.log(c == d);
console.log(c === d);

// == and === both works same in case of object only

// 🔹 3. Wrapper Objects Behind the Scenes

let s = "abc";
console.log(s.toUpperCase());

/*
Internally →
new String("abc") → call method → destroy wrapper → return result

👉 That’s called auto-boxing(automatic wrapping).
It’s why you can write "abc".toUpperCase() even though "abc" is primitive.

*/

// 🔹 4. Behavior of == vs === with Strings

let v = "hi";
let e = new String("hi");
console.log(v == e); // true  (value compared after coercion => objects get converted into primitve )
console.log(v === e);

/*
In primitive strict equality (===), JavaScript first checks the type.
If the types are the same, it then checks the value.

=> suppose both are primitive then === check type first (true) then value
=> suppose one is primitive and wrapper ojb === check type first (false) never went to value
*/

// 🔹 5. Converting Other Types to Strings

console.log(String(42));
console.log(String(true));
console.log(String([1, 2]));
console.log(String({ a: 1 }));
console.log(String(null));
console.log(String(undefined));

// 🔹 5. Template Literals: Expression Power

let h = 5;
u = 30;

console.log(`Sum = ${h + u}`);
console.log(`${h > u ? "h > u" : "u > h"}`);

// even call functions

function greet(name) {
  return `Hi ${name}`;
}

console.log(`${greet("kiran")}`);

// 7. Performance of Concatenation

let result = "";
for (let i = 0; i < 10; i++) {
  result += "x";
  /// every iteration creates a new String which make it slow
}
console.log(result);

// best approach - Using Arrays + join()

let arr = [];

for (let i = 0; i < 10; i++) {
  arr.push("X");
}
console.log(arr.join(""));

// join("") → converts array → string

// 🔹 9. Strings in Boolean Contexts

if ("0") {
  console.log("run");
}
if (false) {
  console.log("run");
}
if ("") {
  console.log("run");
}

// falsy => null,0,undefined,"",false,-infinity are falsy
// truthy => other than falsy values all are truthy

//🔹 10. Coercion in Template Literals

let n = 100;
console.log(`value ${n}`);
console.log(`type ${typeof `${n}`}`); // string because typeof ` ` is string
console.log(`type of ${typeof n}`); // number

// Everything between backticks becomes a string automatically.

/*
| Concept                      | Key Takeaway                                         |
|-------------------------     |------------------------------------------------------|
| String literals stored once | Saves memory                                      |
| Auto-boxing                 | Methods work on primitives                           |
| Primitive ≠ Object          | "hi" !== new String("hi")                            |
| Type conversion             | String() is safest                                   |
| Template literals           | Multiline, expressions allowed                       |
| Immutability                | Cannot mutate existing string                         |
| Unicode                     | `.length` ≠ visible characters                        |
| Truthy/falsy                | Only "" is falsy                                     |
| Performance                 | Use arrays + join for heavy concatenation           |


Auto-boxing is when JavaScript temporarily wraps a primitive value (like a string, number, or boolean) in an object so you can use methods or properties on it.

"abc".toLowerCase();

new String("abc").toLowerCase();

12333.toFixed(2);

new Number(12333).toFixed(2)


const flag = true;
console.log(flag.toString()); // "true"

*/
