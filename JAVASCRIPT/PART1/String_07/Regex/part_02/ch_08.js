// Question: Replace all digits in "abc123" with #

let str = "abc123";

console.log(str.replace(/\d/g, "#"));

/*
/ → start of regex

\ → escape character

d → digit (0–9)

/ → end of regex

g → global (replace all digits)
*/
