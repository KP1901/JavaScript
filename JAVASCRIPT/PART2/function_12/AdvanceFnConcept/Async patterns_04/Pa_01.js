// 1️⃣ Standard API Flow Pattern (MOST COMMON)

// fake fetch data
function fetch(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (url === "/api/data") {
        resolve({
          ok: true,
          json() {
            return Promise.resolve({ id: 1, name: "kiran" });
          },
        });
      } else {
        resolve({ ok: false });
      }
    }, 1000);
  });
}

// Standard API flow
async function loadData() {
  try {
    const res = await fetch("/api/data");

    // 1️⃣ HTTP-level validation
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    // 2️⃣ Parse data
    const data = await res.json();

    // 3️⃣ Return clean data
    console.log(data);
    
  } catch (err) {
    // 4️⃣ Centralized error handling
    console.error("loadData error:", err.message);

    // 5️⃣ Re-throw so caller can decide
    throw err;
  }
}

loadData();

/*
🧠 Why THIS pattern is used everywhere

✅ Clear success path

const data = await loadData();

✅ Centralized error handling

-API validation inside loadData
-UI / service decides what to do

✅ Reusable & testable

-Works in React
-Works in Node
-Works in services


🔑 FINAL RULE (MEMORIZE THIS)

1. Proper API response handling
2. Async functions return data OR throw errors
3. Errors propagate to callers
4. Logging is different from throwing
*/
