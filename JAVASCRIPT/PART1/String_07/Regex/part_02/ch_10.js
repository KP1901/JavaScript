// Replace all "apple" words in "apple apple apple"

let str = "apple apple apple";
console.log(str.replace(/apple/g, "orange"));

/*
/ → start of regex

apple → matches the exact word apple

/ → end of regex

g → global (replace all occurrences)
*/
