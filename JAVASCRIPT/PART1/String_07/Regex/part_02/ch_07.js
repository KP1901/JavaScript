// Question: Match all 2-digit numbers from "2025-09-15"

let str = "2025-09-15";
console.log(str1.match(/-\d{2}/g).map((v) => v.slice(1)));

/*
/\d{2}/g
/ → start of regex

\ → escape character

d → digit (0–9)

{2} → exactly 2 digits together

/ → end of regex

g → global (match all occurrences)
*/
