// sequential fetch

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
    const user = await loadUser();
    const settings = await loadSettings();

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
~2000 ms

Why?

loadSettings() starts only after loadUser() finishes

Total time = 1s + 1s

✅ Correct logic
❌ Not optimized when calls are independent
*/
