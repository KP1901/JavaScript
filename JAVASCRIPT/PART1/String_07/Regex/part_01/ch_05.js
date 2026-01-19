/*
🧩 Challenge 5

Question:
Match exactly 4 digits (no extra characters allowed).

"2025"


Expected Output:

true
*/
let str = "2025 12";
console.log(/\d{4}/.test(str)); // anywhere
console.log(/^\d{4}/.test(str)); // from staring only
console.log(/^\d{4}$/.test(str)); // exact

/*
🧠 Why ^ and $ are needed

^ → start of string
$ → end of string
^\d{4}$ → only 4 digits, nothing else
*/