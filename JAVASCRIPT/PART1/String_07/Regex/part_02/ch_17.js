// Question: Match all uppercase letters in "ABCabc"

let str = "ABCabc";
console.log(str.match(/[A-Z]/g));


/*
/ → start of regex

[ → start of character set

A-Z → uppercase letters from A to Z

] → end of character set

/ → end of regex

g → global (match all occurrences)
*/