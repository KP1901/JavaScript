// Question: Replace multiple spaces with a single space in "one two three"

let str = "one two    three";
console.log(str.replace(/\s+/g, " "));

/*
/\s+/g

/ → start of regex

\ → escape character

s → whitespace (space, tab, newline)

+ → one or more spaces

/ → end of regex

g → global (replace all occurrences)
*/
