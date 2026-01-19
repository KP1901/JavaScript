// Question: Match all lowercase letters in "ABCabc"

let str = "ABCabc";
console.log(str.match(/[a-z]/g));

/*
/ → start of regex

[ → start of character set

a-z → lowercase letters from a to z

] → end of character set

/ → end of regex

g → global (match all occurrences)
*/