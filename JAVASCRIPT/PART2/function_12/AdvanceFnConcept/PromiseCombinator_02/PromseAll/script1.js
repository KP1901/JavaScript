// sequential promises using then

function loadDashBoardSequential() {
  console.time("sequential using then");

  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => {
      if (!res.ok) throw new Error("User fetch failed");
      return res.json();
    })
    .then((user) => {
      console.log("User:", user);

      return fetch("https://jsonplaceholder.typicode.com/posts/1");
    })
    .then((res) => {
      if (!res.ok) throw new Error("Orders fetch failed");
      return res.json();
    })
    .then((orders) => {
      console.log("Orders:", orders);

      return fetch("https://jsonplaceholder.typicode.com/photos/1");
    })
    .then((res) => {
      if (!res.ok) throw new Error("Settings fetch failed");
      return res.json();
    })
    .then((settings) => {
      console.log("Settings:", settings);
    })
    .catch((err) => {
      console.log("Dashboard failed:", err.message);
    })
    .finally(() => {
      console.timeEnd("sequential using then");
    });
}

// loadDashBoardSequential();

// parallel Promise using then (using promise all combinator)

function loadDashBoard() {
  console.time("parallel using then");
  Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1"),
    fetch("https://jsonplaceholder.typicode.com/posts/1"),
    fetch("https://jsonplaceholder.typicode.com/photos/1"),
  ])
    .then((responses) => {
      return Promise.all(
        responses.map((response) => {
          if (!response.ok) {
            throw new Error("HTTP : ", response.status);
          }
          return response.json();
        }),
      );
    })
    .then(([user, orders, settings]) => {
      console.log("User:", user);
      console.log("Orders:", orders);
      console.log("Settings:", settings);
    })
    .catch((error) => {
      console.log("Dashboard failed:", error.message);
    });
  console.timeEnd("parallel using then");
}
// loadDashBoard();

// sequential

async function loadDashboard() {
  console.time("sequential");
  try {
    const userRes = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const ordersRes = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    const settingsRes = await fetch(
      "https://jsonplaceholder.typicode.com/photos/1",
    );

    const user = await userRes.json();
    const orders = await ordersRes.json();
    const settings = await settingsRes.json();

    console.log("User:", user);
    console.log("Orders:", orders);
    console.log("Settings:", settings);
  } catch (err) {
    console.log("Dashboard failed:", err.message);
  }
}

// loadDashboard();

// parallel using async/await (but promise.all combinator)

async function loadDashBoard() {
  console.time("parallel");
  try {
    const responses = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1"),
      fetch("https://jsonplaceholder.typicode.com/posts/1"),
      fetch("https://jsonplaceholder.typicode.com/photos/1"),
    ]);
    console.log(responses);

    for (const response of responses) {
      if (!response.ok) {
        throw new Error(`${response.url} failed with ${response.status}`);
      }
    }

    const data = await Promise.all(responses.map((r) => r.json()));

    // console.log(data);

    const [user, orders, settings] = data;

    console.log(user, orders, settings);
  } catch (error) {
    console.log("Dashboard failed:", error.message);
  }
  console.timeEnd("parallel");
}
loadDashBoard();

/*
🧠 Rule of thumb (remember this)
Use .then() OR async/await — not both in the same function
*/

/*
this is a example of callback hell thats why promise invented

fetch("/user", () => {
  fetch("/orders", () => {
    fetch("/settings", () => {
      console.log("done");
    });
  });
});

*/

/*

🔹 Network-level issues (handled automatically)

These are NETWORK failures:

❌ Internet is down
❌ DNS lookup fails
❌ Server unreachable
❌ Request blocked / CORS / connection refused

What happens?
fetch(url)  // ❌ REJECTS

👉 Promise.all REJECTS automatically 
👉 Control jumps to catch
👉 You do NOT write any manual check (for network level)


🔹 HTTP-level issues (must be checked manually)

These are SERVER responses:
-404 Not Found
-500 Internal Server Error
-401 Unauthorized


What happens?
fetch(url)  // ✅ RESOLVES
response.ok === false


👉 You MUST check:

if (!response.ok) { ... }

final line => Yes — with Promise.all(), network-level issues are handled automatically. You only manually check HTTP errors

*/

/*
🔹 What fetch() REALLY returns
const response = await fetch(url);


response is NOT the data.

It is a Response object like this (simplified):

Response {
  ok: true,
  status: 200,
  url: "...",
  headers: Headers {...},
  body: ReadableStream {...}  // 👈 JSON is HERE (raw bytes)
}


⚠️ The JSON is inside response.body, but:

it is a stream

you cannot read it directly

🔹 Why .json() exists
const data = await response.json();


What happens internally:

1️⃣ Read the stream from response.body
2️⃣ Convert bytes → text
3️⃣ Parse text → JavaScript object
4️⃣ Return a new Promise with parsed JSON

That’s why:

response.json() // returns a Promise



*/

Promise.all([]).then().catch();
