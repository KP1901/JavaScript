/*
    
    🧩 Challenge 10 (Final)

Question:
Match a valid simple email address.

"test.user@gmail.com"


Expected Output:

true*/

let email = "kir@gmail.com";

console.log(/^[a-zA-Z0-9]{5,}@[a-zA-Z]+\.[a-zA-Z]{2,}$/.test(email));
// or

console.log(/^\w+@[a-zA-Z]+\.(in|com|org)$/.test(str));
/*

/ → start of regex

^ → start of string

[ → start of character set

a-z → lowercase letters

A-Z → uppercase letters

0-9 → digits

] → end of character set

{5,} → minimum 5 characters, no upper limit

@ → must contain @

[ → start of character set

a-z → lowercase letters

A-Z → uppercase letters

] → end of character set

+ → one or more characters

\. → literal dot (.)
👉 “once only” because no quantifier is used

[ → start of character set

a-z → lowercase letters

A-Z → uppercase letters

] → end of character set

{2,} → minimum 2 characters, no upper limit
❗ (you wrote {5,} and “minimum 2” — small typo)

$ → end of string

*/
