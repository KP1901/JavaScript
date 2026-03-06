function userInfo() {
  return Promise.resolve({ name: "kiran", age: 26 });
}
function orderDetails() {
  // return Promise.resolve({ dish: "panipuri", cost: 30 });
  return Promise.reject(new Error("data not found"));
}

Promise.allSettled([userInfo(), orderDetails()])
  .then((results) => {
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log(`Promise ${index} Success:`, result.value);
      } else {
        console.error(`Promise ${index} Failed:`, result.reason.message);
      }
    });
  })
  .catch((error) => {
    console.log(`Promise ${index} Failed:`, error.message);
  });

/*
⚡ Key Rules for Promise.allSettled()

1️⃣ Runs all promises in parallel.

2️⃣ It ALWAYS resolves (never rejects).

3️⃣ It waits for ALL promises to finish
   (either fulfilled or rejected).

4️⃣ .catch() will NOT run because it never rejects.

5️⃣ It returns an array of result objects:
   [
     { status: "fulfilled", value: ... },
     { status: "rejected", reason: ... }
   ]

6️⃣ It DOES collect multiple errors.
*/
