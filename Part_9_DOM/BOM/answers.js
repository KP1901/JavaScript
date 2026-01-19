// question - 4
function openNewBrowser() {
  // Open a new browser window using BOM

  // Syntax: window.open(URL, name, specs, replace);

  // Example 1: Open blank window
  //   window.open();

  // Example 2: Open URL in a new tab
  window.open("https://www.google.com", "_blank");

  // Example 3: Open URL with custom size and features
  window.open(
    "https://www.google.com",
    "_blank",
    "width=600,height=400,menubar=no,toolbar=no,scrollbars=yes"
  );

  // Notes:
  // 1. Usually triggered by a user action (like button click) to avoid popup blockers
  // 2. You can store reference to new window to manipulate it
  let newWin = window.open(
    "https://example.com",
    "_blank",
    "width=500,height=300"
  );
  newWin.focus(); // Bring new window to front
}
// question - 5
function browserInfo() {
  alert(
    `UserAgent : ${navigator.userAgent}\nPlatform:${navigator.platform}\nLangugage : ${navigator.language}`
  );
}
// question - 6
function getScreenSize() {
  // Detecting screen size using BOM (window.screen)

  // Width and height of the user's screen
  let screenWidth = window.screen.width;
  let screenHeight = window.screen.height;

  console.log("Screen Width: " + screenWidth + "px");
  console.log("Screen Height: " + screenHeight + "px");

  // Optional: Available width and height (excluding OS taskbars)
  let availWidth = window.screen.availWidth;
  let availHeight = window.screen.availHeight;

  console.log("Available Width: " + availWidth + "px");
  console.log("Available Height: " + availHeight + "px");

  // Viewport width and height (actual visible page area)
  let innerWidth = window.innerWidth;
  let innerHeight = window.innerHeight;

  console.log("Inner Width: " + innerWidth + "px");
  console.log("Inner Height: " + innerHeight + "px");

  let getTaskBarHeight = window.screen.height - window.screen.availHeight;
  console.log(getTaskBarHeight);
  /*
  ✅ So:

  screen.height → full monitor height

  availHeight → full monitor minus OS taskbar

  innerHeight → only the part where your webpage is actually visible (does not count tabs, search bar, bookmarks bar, dev tools, etc.)
  */
}
// question - 7
function getLocationInfo() {
  /*
  =============================
  📌 LOCATION OBJECT IN JAVASCRIPT
  =============================

  The location object represents the current page URL.
  You can:
    ✅ Read parts of the URL (protocol, host, path, query string, hash)
    ✅ Navigate to a new page
    ✅ Reload or replace the current page

  */

  console.log("=== Location Object Demo ===");

  // 1️⃣ Full URL of the page
  console.log("Full URL (location.href):", location.href);

  // 2️⃣ URL Parts
  console.log("Protocol (location.protocol):", location.protocol); // "https:" or "http:"
  console.log("Hostname (location.hostname):", location.hostname); // e.g., "example.com"
  console.log("Port (location.port):", location.port || "default"); // e.g., 443 (or empty)
  console.log("Pathname (location.pathname):", location.pathname); // e.g., "/products"
  console.log(
    "Search (location.search):",
    location.search || "No query string"
  ); // e.g., "?id=123"
  console.log("Hash (location.hash):", location.hash || "No hash"); // e.g., "#section1"

  /*
  =============================
  📌 NAVIGATION METHODS
  =============================
  These let you move between pages.
  Uncomment one at a time to see how they work.
  */

  // 3️⃣ Navigate to a new page (adds to browser history)
  // location.href = "https://google.com";

  // 4️⃣ Reload the current page
  // location.reload();

  // 5️⃣ Replace current page (does NOT save in history, so back button won't return here)
  // location.replace("https://example.com");

  // 6️⃣ Assign a new page (similar to href, but explicitly keeps history)
  // location.assign("https://example.com");
}

// question - 9
function dialogMethods() {
  // 1. alert() - shows a simple message
  alert("Hello, world!");
  console.log("This runs after you click OK on alert");

  // 2. confirm() - asks for user confirmation (OK / Cancel)
  let isConfirmed = confirm("Do you want to proceed?");
  console.log("User clicked:", isConfirmed); // true or false

  if (isConfirmed) {
    console.log("User chose to proceed");
  } else {
    console.log("User cancelled the action");
  }

  // 3. prompt() - asks user to enter input
  let userName = prompt("Enter your name:");
  if (userName !== null) {
    console.log("Hello, " + userName + "!");
  } else {
    console.log("User cancelled the prompt");
  }
}

// question - 10
function question10() {
  setTimeout(() => {
    console.log("Hi kiran");
  }, 2000);
}
// question - 11

function question11() {
  /*
11. setInterval(asynchronous) and its use

Theory:
- setInterval executes a function repeatedly at fixed intervals (in milliseconds).
- It continues to run until it is stopped using clearInterval(id).
- Useful for timers, animations, live updates, etc.

Syntax:
let intervalId = setInterval(function, delayInMilliseconds);
- function: The function to repeat.
- delayInMilliseconds: Time interval between executions.
- intervalId: ID to stop the interval later using clearInterval(intervalId).
*/
  function greetPerson() {
    console.log("hi");
  }

  let inerId = setInterval(greetPerson, 2000);

  setTimeout(() => {
    clearInterval(inerId);
    console.log("hi stoped");
  }, 10000);
  // Practical Example:

  // Print "Hello!" every 2 seconds
  let intervalId = setInterval(() => {
    console.log("Hello!");
  }, 2000);

  // Stop it after 10 seconds
  setTimeout(() => {
    clearInterval(intervalId); // Stop the interval
    console.log("Interval stopped");
  }, 10000);

  /*
Output in console:
Hello!
Hello!
Hello!
Hello!
Hello!
Interval stopped
*/
}

function question12() {
  let timeOutId;

  function greet() {
    timeOutId = setTimeout(greet, 2000);
    console.log("Hello");
  }
  timeOutId = setTimeout(greet, 2000);

  /*
 0s - 2s  -> waiting
 2s - 10s delay -> hello hello hello hello
*/
  setTimeout(() => {
    clearInterval(timeOutId);
    console.log("cleared");
  }, 10000);
}

// mini challenge

let intervalId = setInterval(getStockPrice, 2000);
let flag = false;

function getStockPrice() {
  let min = 300;
  let max = 400;
  let stockPrice = Math.random() * (max - min) + min;
  if (stockPrice > 370) {
    console.log(`you buyed the stock at this price : ${stockPrice.toFixed(2)}`);
    flag = true;
    clearInterval(intervalId);
  }
  return stockPrice;
}
setTimeout(() => {
  if (!flag) {
    console.log("No trade executed");
    clearInterval(intervalId);
  }
}, 20000);
