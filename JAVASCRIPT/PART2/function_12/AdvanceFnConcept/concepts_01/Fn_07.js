/*
🧩 STEP 3: PROMISES

(The solution to callback hell)

1️⃣ THEORY: What problem do Promises solve?

Callbacks had 3 big problems:

1.Callback hell (nested code)
2.Inversion of control
3.Messy error handling

👉 Promises solve ALL three.

2️⃣ THEORY: What is a Promise? (VERY IMPORTANT)

A Promise is an object that represents a value that will be available in the future.

Not now. Later.

Think like:
“I promise I’ll give you the data later.”
-----------------------------------------------------

3️⃣ Promise States (MUST MEMORIZE)

A promise can be in only one of these:

| State     | Meaning       |
| --------- | ------------- |
| pending   | still working |
| fulfilled | success       |
| rejected  | failed        |

📌 Once fulfilled/rejected → never changes again

*/

// 4️⃣ Creating a Promise (CORE MECHANICS)

const promise = new Promise((resolve, reject) => {});

/*
Executor function:
-Runs immediately
-Gets two functions:
    -resolve(value)
    -reject(error)
*/

/*

A Promise is an object. resolve and reject are functions provided by JavaScript. After 1 second, resolve is called, so the promise moves from pending to fulfilled and stores the value "DATA READY".

📌 Promise is pending
📌 After 1s → fulfilled
*/

// real example :

const Pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("DATA READY");
    // reject("not found");
  }, 1000);
});

// 5 How do we access the fulfilled value ?

Pr.then((data) => {
  if (data !== "DAT READY") {
    throw new Error("data not found");
  }
  console.log(data);
}).catch((error) => {
  console.log(error.message);
});

/*

| Scenario                    | What happens inside Promise | `.then()` | `.catch()` | Console Output |
| --------------------------- | --------------------------- | --------- | ---------- | -------------- |
| ✅ Success                   | `resolve("DATA READY")`     | runs      | skipped    | `DATA READY`   |
| ❌ Rejection                 | `reject("not found")`       | skipped   | runs       | `not found`    |
| ❌ Error in `.then()`        | `throw new Error()`         | throws    | runs       | error message  |
| ❌ Error in Promise executor | `throw new Error()`         | skipped   | runs       | error message  |


Promises only tell you data arrived.
They don’t tell you data is correct.


Final summary

First → success only (unsafe)
Second → success + error (safe)

Correct mental model ✅

1️⃣ If promise is fulfilled

➡️ .then() runs

.then((data) => {
  success path
});

2️⃣ If promise is rejected

➡️ .catch() runs

.catch((err) => {
  error path
});

 */

// THESE ARE TWO WAYS TO HANDLE FETCH (USED ALWAYS ASYNC/AWAIT)

// Step 1: Call fetch (returns a Promise)

fetch("https://jsonplaceholder.typiode.cm/users/1")
  .then((response) => {
    // Step 2: Check HTTP status
    if (!response.ok) {
      throw new Error("HTTP : Error : " + response.status);
    }
    // Step 3: Parse JSON (returns another Promise) (where it passes to nextThen)
    return response.json();
  })
  .then((user) => {
    // Step 4: Use the actual data
    console.log("User data received:");
    console.log(user);
  })
  .catch((error) => {
    // Step 5: Handle ANY error
    console.log(error.message);
  });

async function fetchUserData() {
  try {
    // Step 1: Call fetch (returns a Promise)
    const response = await fetch("https://jsonplaceholder.typicode.om/users/1");

    // Step 2: Check HTTP status
    if (!response.ok) {
      throw new Error("HTTP : Error : " + response.status);
    }
    // Step 3: Parse JSON (returns another Promise)
    const data = await response.json();

    // Step 4: Use the actual data (return)
    return data;
  } catch (error) {
    // Step 5: Handle ANY error
    console.log(error.message);
  }
}

fetchUserData();

/*
6️⃣ Key rules (memorize)

✅ Promise settles only once
✅ First resolve or reject wins
❌ Both cannot happen
❌ Later calls are ignored
❗ fetch resolves on HTTP errors, rejects only on network errors

*/
