// 1️⃣ Extraction & Access Methods

// 1 🔹 charAt(index) => Returns the character at a specific index.

let str = "hello my name is kiran";
console.log(str.charAt(1));
console.log();

// 2 🔹 charCodeAt(index) =>  Returns UTF-16 code of the character for 1 unit.

console.log(str.charCodeAt(1));
console.log();

// 3🔹 at(index) (ES2022+) => Supports negative indexing => only one returns from right to left
console.log(str.at(-1));

// 4 🔹 slice(start, end) => Extracts a part of the string (end not included) and Supports negative indices..

console.log(str.slice(0, str.length));
console.log(str.slice(0, 50));
console.log(str.slice(-5));
console.log(str.slice(-5, -1));
console.log(str.slice(100)); // " "
/*
total length = 22;

-5 = 22 -5= (17,endofstring)

-5 = 22 -5 = 17
-1 = 22 -1 = 21

*/

//if Start index greater than end index
console.log(str.slice(4, 1)); // returns empty

//5 🔹 substring(start, end)

console.log(str.substring(0, 4));
console.log(str.substring(-4)); // no negative
console.log(str.substring(4, 1)); // if start > end swap

/*
| Feature                   | `substring`                        | `slice`         |
| ------------------------- | ---------------------------------- | --------------- |
| Negative indexes          | Treated as 0                       | -5 = total.length - 5 |
| Swapping indices          | Automatically swaps if start > end | Does NOT swap (return empty "")  |
| Modifies original string? | ❌ No                               | ❌ No            |
| Supports second parameter | End index                          | End index       |

*/

// 2️⃣ Search / Check Methods

//1. 🔹 includes(substring, start)

console.log("hi kiran".includes("h"));
console.log("hi kiran".includes("H")); // case sensitive
console.log();

let res = "Javascript";
console.log(res.includes("script", 3));
console.log(res.includes("script", 5));
console.log(res.includes("script", 30));
console.log();

// 2.🔹 startsWith(substring, position)
// position optional
let res1 = "TypeScript";

console.log(res1.startsWith("Script"));
console.log(res1.startsWith("Script", 0));
console.log(res1.startsWith("Script", 4));
console.log(res1.startsWith("T"));
console.log();

// 3🔹 endsWith(substring, length)
let res2 = "EcmaScript is best language";
console.log(res2.endsWith("language"));
console.log(res2.endsWith("pt", 10));
console.log(res2.endsWith("Ec", 2));
console.log(res2.endsWith("ma", 4));

/*dd
jo ma hai wo 4 tak end ho rawha hia kya?
jo ec hai wo 2 tak end ho raha hia kya?
jo pt hai wo 10 tak end ho raha hai kya?
👉 str.endsWith("Learning", 8) means:
Treat the string as "Learning" and check if it ends with "Learning".
*/
