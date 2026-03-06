// sequential fetching using then

function loadDashBoardSequential() {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => {
      if (!res.ok) {
        throw new Error("User Fetch Failed");
      }
      return res.json();
    })
    .then((user) => {
      console.log(user);

      return fetch("https://jsonplaceholder.typicode.com/posts/1");
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Post fetch Failed");
      }
      return res.json();
    })
    .then((post) => {
      console.log(post);

      return fetch("https://jsonplaceholder.typicode.com/photos/1");
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Photos fetch Failed");
      }
      return res.json();
    })
    .then((photos) => {
      console.log(photos);
    })
    .catch((error) => {
      console.log(error);
    });
}
// loadDashBoardSequential();

/*
Layer 1:
fetch() → Promise → resolves to Response (when Promise Fullfil)

Layer 2:
response.json() → Promise → resolves to actual data(when Promise Fullfil)

*/

// parallel fetching using then

function fetchUsingParallelThen() {
  Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1"),
    fetch("https://jsonplaceholder.typicode.com/posts/1"),
    fetch("https://jsonplaceholder.typicode.com/photos/1"),
  ])
    .then((responses) => {
      return Promise.all(
        responses.map((response) => {
          return response.json();
        }),
      );
    })
    .then(([user, order, profile]) => {
      console.log(user, order, profile);
    })
    .catch((error) => {
      console.log(error);
    });
}
// fetchUsingParallelThen();

//   sequential fetching using async

async function fetchUsingSequentialAsync() {
  try {
    let res1 = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let res2 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let res3 = await fetch("https://jsonplaceholder.typicode.com/photos/1");

    if (!res1.ok || !res2.ok || !res3.ok) {
      throw new Error("fetch failed");
    }
    let userData = await res1.json();
    let orderData = await res2.json();
    let profileData = await res3.json();

    console.log(userData, orderData, profileData);
  } catch (error) {
    console.log(error.message);
  }
}
// fetchUsingSequentialAsync();

//   parallel fetching using async

async function fetchUsingParallelAsync() {
  try {
    let responses = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1"),
      fetch("https://jsonplaceholder.typicode.com/posts/1"),
      fetch("https://jsonplaceholder.typicode.com/photos/1"),
    ]);

    for (const response of responses) {
      if (!response.ok) {
        throw new Error("Fetch Failed", response.status);
      }
    }

    const data = await Promise.all(
      responses.map((response) => {
        return response.json();
      }),
    );

    const [user, order, profile] = data;

    console.log(user, order, profile);
  } catch (error) {
    console.log(error.message);
  }
}
fetchUsingParallelAsync();

/*
🧠 Rule of thumb (remember this)
Use .then() OR async/await — not both in the same function

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

sequential => total time => 2s + 2s + 3s = 7s
parallel => total time => max(time)

*/
