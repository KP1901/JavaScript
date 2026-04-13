const btn = document.getElementById("btn");

btn.textContent = document.body.classList.contains("dark") ? "light" : "dark";

btn.addEventListener("click", () => {
  let newTheme = document.body.classList.contains("dark") ? "light" : "dark";

  document.body.classList.remove("light", "dark");

  document.body.classList.add(newTheme);

  btn.textContent = newTheme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
});

/*

🔢 Total Problems You Fixed: 6 major issues

1️⃣ ❌ Stale variable (mode)

👉 You were using old value from localStorage

✔ Fixed by using DOM as truth

2️⃣ ❌ Removing wrong class

remove(newTheme) ❌

✔ Fixed by removing current theme instead

3️⃣ ❌ Trusting localStorage too much

👉 You were using storage for logic

✔ Fixed by using:

👉 classList.contains() (DOM)

4️⃣ ❌ Null issue (first-time user)

localStorage.getItem("theme") → null

✔ Fixed using:

?? "light"

5️⃣ ❌ Wrong ternary condition

newTheme ? "light" : "dark" ❌

✔ Fixed using:

newTheme === "dark" ? "light" : "dark"

6️⃣ ❌ Flicker + DOM timing issues (BIGGEST)

Problems:

-Using defer → late execution
-Usingxwindow.load → too late
-Accessing body & btn early

✔ Fixed by:

-Using <head> script for theme
-Using document.documentElement
-Moving DOM logic to script.js

*/