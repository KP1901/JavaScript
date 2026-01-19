// ✅ Full Code: Async IIFE (App Startup)

// ------------------------------
// Simulated async API calls
// ------------------------------
function loadUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Kiran", loggedIn: true });
    }, 1000);
  });
}

function loadSettings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ theme: "dark", language: "en" });
    }, 800);
  });
}

// ------------------------------
// App initialization
// ------------------------------
function initApp(user, settings) {
  console.log("App Initialized ✅");
  console.log("User:", user);
  console.log("Settings:", settings);
}

// ------------------------------
// Async IIFE (Startup Code)
// ------------------------------
(async () => {
  console.time("slow");
  try {
    console.log("Starting app...");

    const [user, settings] = await Promise.all([loadUser(), loadSettings()]);

    if (!user.loggedIn) {
      throw new Error("User not logged in ❌");
    }

    initApp(user, settings);
  } catch (error) {
    console.log(error.message);
  }
  console.timeEnd("slow");
})();

/*
What you are saying (correct interpretation)

You are saying:

“Settings are not technically dependent on user data,
but logically / indirectly we only care about settings
after user is loaded.”

✔️ This is called an indirect (logical) dependency
❌ Not a technical dependency

And this distinction is VERY important.


Final 1-line rule (write this in your brain)

-If one async task needs output/state of another → sequential
-If not → parallel
*/
