async function retry(fn, attempt = 3) {
  for (let i = 1; i <= attempt; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === attempt) {
        throw error;
      }
    }
  }
}

async function unstableApi() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.6;
    setTimeout(() => {
      if (success) {
        resolve("✅ API Success");
      } else {
        reject(new Error("❌ Network error"));
      }
    }, 500);
  });
}

(async () => {
  try {
    const result = await retry(unstableApi, 3);
    console.log("FINAL RESULT:", result);
  } catch (error) {
    console.log("FINAL FAILURE:", error.message);
  }
})();

/*
Real situation: Fetching data from a web API

You request data from a server.

Sometimes it fails because:

internet hiccup
server busy
temporary timeout

Important:
👉 Nothing is wrong with your request.
👉 The failure is temporary.

How your retry logic works (in words)

1.You try to fetch the API
 -If the server responds → ✅ done

2.If the request fails

 -You don’t panic
 -You assume: “maybe temporary issue”

3.You try again

 -Same request
 -Same data
 -Fresh attempt

4.This repeats

-Until it succeeds
 OR
-You reach the maximum allowed tries

5.If all tries fail

-You stop
-You report the error to the user/system

--------------------------------------------------------------------
Why this makes sense in real life

Think like a human:

“Website didn’t load… refresh.”
“Still didn’t load… refresh once more.”
“Okay, something is wrong now.”

That’s exactly what retry does.

-----------------------------------------------------------------------------
What retry is assuming

-Failure is temporary
-Trying again might succeed
-But retrying forever is bad

-----------------------------------------------------------------------------
Why we try multiple attempts

We retry NOT because the API is wrong, but because:

-internet may drop for a second
-server may be busy
-request may timeout
-temporary network glitch

These are outside your control.
----------------------------------------------------------------------------------------------
📌 Used for:

-flaky networks
-payment retries
-API instability

Without retry

Click
  ↓
API call
  ↓
Fail ❌

User must click again

With retry

Click
  ↓
API call
  ↓
Fail
  ↓
Retry automatically
  ↓
Retry automatically
  ↓
Success / Fail
*/

// REAL WORLD EXAMPLE

// Retry function
async function retry(fn, attempt = 3) {
  while (attempt >= 1) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === 1) {
        throw error;
      }

      console.log("Retrying...");
      attempt--;
    }
  }
}

async function loadData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  if (!response.ok) {
    throw new Error("HTTP " + response.status);
  }

  return await response.json();
}

async function main() {
  try {
    const data = await retry(loadData, 3);
    console.log(data);
  } catch (error) {
    console.log("Failed:", error.message);
  }
}

main();
