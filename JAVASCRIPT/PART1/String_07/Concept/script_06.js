//🔹 1. String.prototype.match()

/*
Syntax;

str.match(pattern)

pattern → RegExp or string
Returns different results depending on g flag
*/

//🔸-------------------- Case 1: match() WITHOUT g-----------------

let s = "I have 2 apples and 3 bananas";
console.log(s.match(/\d+/));

/*
\d → one digit [0-9]
\d+ → one or more digits together [12]
g → global, find all matches

Meaning

Finds first match only

Gives extra info :

-index
-input
-groups

📌 Think of this as “search + details”
*/

//🔸--------------------- Case 2: match() WITH g----------------------------

console.log(s.match(/\d+/g));

/*
🔑 Important rule (must remember)
match() behavior changes based on 'g'

| Regex flag | Result                |
| ---------- | --------------------- |
| No `g`     | detailed match object |
| With `g`   | array of matches only |

*/
