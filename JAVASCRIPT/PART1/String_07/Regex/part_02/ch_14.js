// Question: Replace all "a" with "aa" in "aaa"

let str = "aaa";
console.log(str.replace(/a/g, "aa"));

/*
Simple rule to remember

replace() → use regex + g

replaceAll() → use string OR regex without g
*/