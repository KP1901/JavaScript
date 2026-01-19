/*
🧩 Challenge 8

Question:
Match all words in the sentence.

"Regex is very powerful"


Expected Output:

["Regex", "is", "very", "powerful"]
*/
let str = "Regex is very powerful";
console.log(str.match(/\w+/g)); // number or letter or _
console.log(str.match(/[a-zA-Z]+/g));
