/*
🧩 STEP 7: COMMON ASYNC BUGS & MISTAKES

I’ll show:

-❌ the mistake
-🤯 why it happens
-✅ the correct way
*/

// 1️⃣ Forgetting await (MOST COMMON)

async function getUser() {
  const user = fetch("/api/user"); // promise , not data
  console.log(user);
}
getUser();

/*
🤯 Why?

Why this happens

-fetch() is async
-Without await, you store the Promise itself
-console.log prints the Promise, not the result
*/

// correct version

async function getUser() {
  try {
    const response = await fetch("api/user");
    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.log("Error:", error.message);
  }
}
getUser();

/*
🧠 FINAL RULE (MEMORIZE THIS)

If a function returns a Promise, you MUST await it
(or use .then()) to get the actual value.
*/
