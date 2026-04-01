//1. ------------string creation----------

let str = "Hi this is Javascript"; // using string literal

let fname = "kiran";

let str1 = `hi my name is ${fname}`; // template literal (interpolation and manipulation)

let str3 = new String("hi"); // using string constructor (Object form)

//2. -------------String modification-------------

let word = "Hi";
word[0] = "K";
console.log(word); // strings are immutable

// manipulate a string -creating a new String

word = "B" + word[1];
console.log(word);

//3. -------------escape characters----------

// You can use backslash \ to escape quotes or add special characters.
console.log("hi my name' is kiran");
console.log('hi my name" is kiran');
console.log("hi my name is kiran");
console.log("hi my name\\ is kiran");
console.log("hi my name\n is kiran");
console.log("hi my name\t is kiran");
console.log("hi my \bname is kiran");

// string length - Use .length to count characters (including spaces).

let myString = "hi my name is kiran";
console.log(myString.length);

//4.🔹 Accessing Characters

// You can access using indexing or .charAt().

let myNewStr = "Kiran";
console.log(myNewStr[0]);
console.log(myNewStr.charAt(0));

/*
🧠 Difference:

str[1] → returns undefined if index doesn’t exist.

charAt(1) → returns an empty string "" if index doesn’t exist.
*/

// 6) Comparing Strings

//Strings are compared lexicographically (like dictionary order), using Unicode.

console.log("apple" < "banana");
console.log("Zebra" > "apple"); // (Z has smaller Unicode)
console.log("Pineapple" > "Chiku");

// 👉 Comparisons are case-sensitive:

console.log("a" === "A");

// 7. -------------------- typeof and conversion-------------

console.log("typeof String =>" + typeof "hi");
console.log("typeof String Object =>" + typeof new String("hi"));

// 8.---------------------conversion-----------------
let age = 30;
console.log(typeof age);
console.log(typeof String(age));
console.log(typeof age.toString());

// 9.---character storage ------------

console.log("a".length); //1
console.log("b".length); // 1
console.log("👍".length); //2
console.log("😎".length); //2

// 10.----- access code------------
console.log("A".codePointAt(0)); // UTF CODE
console.log("😎".charCodeAt(0)); // one Single UTF code
console.log("😎".codePointAt(0)); // full  UTF code

/*
"A" → [0041]
"😎" → [D83D][DE0E] → combined → code point 128526
*/

// ------------------------------------------
// ✅ 11.. Length ≠ Actual characters

Example: "😎😎😎".length; // 6 (because 3 emojis × 2 units)
Array.from("😎😎😎").length; // 3 (real characters)

// -----------------------access emoji--------
let emojis = "😎👍";
console.log(emojis[0]); // breakout (because half of code)
console.log(Array.from(emojis)[0]); // convert to array then access with index

/*
STAGE 1 SUMMARY TABLE
==============================
| Concept        | Key Point                                           |
|----------------|-----------------------------------------------------|
| String type    | Primitive data type                                 |
| Creation       | ' ', " ", ` ` ,new String()                          |
| Immutable      | Cannot change existing string                        |
| Length         | .length                                             |
| Escape         | \n, \t, \', \", \\                                  |
| Access         | str[i] or str.charAt()                              |
| Compare        | Lexicographically (case-sensitive)                 |
| Convert        | String() or .toString()                             |
| ch.length      | returns 1 unit UTF-16 character length              |
| emoji.length     | returns 2 unit UTF-16 character length           |
| codePointAt(0)    | returns full UTF-16 code                       |
| charCodeAt(0)    | returns first UTF-16 code pair                      |
*/
