/*
----------------------------------------------
⭐ Final Summary for Notes
primitive (cant change the value only can replace)
✔ Primitive = cannot modify → only replace
✔ Strings are immutable
✔ Attempting to change a character does nothing
✔ To “modify” a string, you must create a new one
*/

let word = "Hello";
word[0] = "K";
console.log(word);

let newWord = "K" + word.slice(1, 5);
console.log(newWord);
console.log(word);

/*
✔ Primitive types (Number, String, Boolean, Null, Undefined, Symbol, BigInt)

→ are copied by value
→ stored separately
→ changes do NOT reflect on the original
-so inside b only value 5 is got so if we changed it doesn't affect original one
*/

let a = 5;
let b = a;
b = 8;
console.log(a);
console.log(b);
console.log(a == b);

//This is NOT type coercion; it is simply comparing two numbers.

/*
 -above example is not type coercion example because in type coercion comparison happens between two different types
 let a  = 5 ;
 let b = "5";
console.log(a == b); 
console.log(a === b);
== (loose equality)
✔ Performs type coercion
✔ Converts data types (string → number, boolean → number, null ↔ undefined)
✔ Compares values after conversion

=== (strict equality)
❌ No type coercion
✔ Compares type first if true + then compare value 
✔ "5" stays a string
✔ 5 stays a number
----------------------------------------------
✅ The Exact Rule (ECMAScript Spec)
------------------------------------------
1)When doing:

x == y

and types differ:

If one is string and the other is number →

👉 Convert the string to a number
👉 Compare the two numbers

Example : 
let a = "1";
let b = 1;
console.log(a == b); // number == number


2)When doing:

x == y

and types differ:

If one is string and the other is boolean →

👉 Convert the boolean to a number
👉 Convert the string to a number
👉 Compare the two numbers

Example : 
let a = "1";
let b = true;
console.log(a == b); // number == number


3)when doing : 

let a = "0";
let b = null;
console.log(a == b);

Step-by-step:

-"0" is a string
-null is a special primitive
-They are not both null or undefined
-So per spec → return false directly

✔ Output: false

imp : In loose equality (==), null and undefined are NEVER converted to string, number, or boolean. and one rule null == undefined // true
*/

// ⭐ Type coercion = JavaScript automatically converts one data type into another.
// ------------------------------------------------------

// non primitive - provide reference which point to each other so change is one allows to change in other

let user1 = {
  userName: "kiran",
  userAge: 26,
};

let user2 = user1;

user2.userAge = 27;

console.log(user1);
console.log(user2);

/*
------------------------------------------------------
In loose equality (==), null and undefined follow a special rule.
They are never converted to numbers.
They are only compared to each other.

*/
