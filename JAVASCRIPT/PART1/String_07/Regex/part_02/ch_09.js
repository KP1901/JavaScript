// Question: Replace only the first "apple" in "apple apple apple"

let str = "apple apple apple";
console.log(str.replace(/^apple/, "orange"));

/*
^ → ensures matching only at the start of the string

apple → exact word match

No g → replaces only the first match
*/