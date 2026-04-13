/*
1. What localStorage Actually Is (Real Meaning)

localStorage is a browser storage system that lets JavaScript store data in the user's browser permanently.

Key characteristics:

-Data persists even after page refresh
-Data remains after browser restart
-Stored as key → value pairs
-Works only on the same domain
-Capacity about 5MB per origin

Example:

localStorage.setItem("username", "Kiran");

Browser stores:

username : "Kiran"

 */

localStorage.setItem("username", "kiran");

/*

2. Where LocalStorage Lives

Each website gets its own storage bucket.

Example:

example.com → its own localStorage
google.com → different localStorage

So:

localStorage of amazon.com
≠
localStorage of flipkart.com

Security reason.

*/

// STEP 3 : LocalSotrage APi methods

// 1. Store Data => setItem()

localStorage.setItem("theme", "dark");

// 2 .read Data => getItem()

console.log(localStorage.getItem("theme"));

// 3. remove specific data => removeItem()

localStorage.removeItem("theme");

// 4. get key by index => key()

console.log(localStorage.key(0));

// 4.clear everything =>clear()

localStorage.clear();

/*
STEP 4 : Important Production Rule

⚠️ localStorage stores only STRINGS

Even numbers become strings.

Example:

localStorage.setItem("age", 25);

Stored as:

"25"

*/
localStorage.setItem("age", 26);

console.log(localStorage.getItem("age"));
