// parallel fetch

// fake async api

async function loadUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ userId: 1, name: "Kiran", isLoggedIn: true });
    }, 1000);
  });
}

async function loadSettings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ theme: "dark" });
    }, 1000);
  });
}

(async () => {
  console.time("fast");
  console.log("starting...");
  try {
    const [user, settings] = await Promise.all([loadUser(), loadSettings()]);

    if (!user.isLoggedIn) {
      throw new Error("User is Not Logged In");
    }
    console.log(user, settings);
  } catch (error) {
    console.log(error.message);
  }
  console.timeEnd("fast");
})();

/*
⏱ Execution time
~1000 ms

Why?

Both async calls start at the same time

JS waits only once

Total time = max(1s, 1s)

✅ Correct logic
✅ Optimized
✅ What interviewers WANT


| Version                  | Correct | Fast | Interview-ready |
| ------------------------ | ------- | ---- | --------------- |
| Sequential               | ✅       | ❌    | ⚠️              |
| Parallel (`Promise.all`) | ✅       | ✅    | ⭐⭐⭐             |

*/
