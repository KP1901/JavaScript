// Question: Replace first number sequence in "abc123xyz" with "NUM"

let str = "abc123xyz";
console.log(str.replace(/\d+/, "NUM"));

/*
/ → start of regex

\ → escape character

d → digit (0–9)

+ → one or more digits together

/ → end of regex

(no g) → replaces only the first match
*/