// Question: Match all digit groups from "abc123def456"

let str = "abc123def456";
console.log(str.match(/\d+/g));

/*
/\d+/g

/ → start of regex

\ → escape character

d → digit (0–9)

+ → one or more times

/ → end of regex

g → global (find all matches)

*/