// 7️⃣ ❌ WRONG: Mixing await and .then() (confusing)

function fetchData() {
  return Promise.resolve({
    json() {
      return Promise.resolve({ name: "kiran" });
    },
  });
}

async function run() {
  // ❌ mixing await + then
  const data = await fetchData().then((res) => res.json());
  console.log(data);
}

run();

/*

🤯 Why this is bad

-You already used await
-Then you switch back to .then()
-Harder to read
-Harder to debug
-No benefit at all

*/

// ✅ CORRECT: Clean async/await style

async function run() {
  const res = await fetchData(); // ✅ await promise
  const data = await res.json(); //  ✅ await next promise
  console.log(data);
}

run();

/*
🧠 FINAL RULE (MEMORIZE THIS)

-If you use async/await, use it consistently.
-Don’t mix it with .then() unless absolutely necessary.
*/
