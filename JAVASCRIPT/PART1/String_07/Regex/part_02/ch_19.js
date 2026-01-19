// Question: Remove all special characters from "hi@123!"

let str = "hi@123!";

console.log(str.replace(/[^a-zA-Z0-9]/g, ""));

/*

/[^a-zA-Z0-9]/g

/ → start of regex

[ → start of character set

^ → NOT (negation inside [])

a-z → lowercase letters

A-Z → uppercase letters

0-9 → digits

] → end of character set

/ → end of regex

g → global (remove all matches)

👉 This means: remove everything that is NOT a letter or digit

*/

/*
🔑 Key rule to remember

^ inside [] = NOT

Outside [] = start of string
*/
