//3️⃣ Question: Match a digit in "hello"

let str = "hello world!";
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