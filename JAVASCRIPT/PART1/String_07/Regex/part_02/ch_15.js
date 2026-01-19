// Remove all spaces from "hello world"

let str = "hello world";
console.log(str.replace(/\s+/g, ""));

/*
/\s+/g
/ → start of regex

\ → escape character

s → whitespace (space, tab, newline)

+ → one or more

/ → end of regex

g → global (remove all spaces)
 */
