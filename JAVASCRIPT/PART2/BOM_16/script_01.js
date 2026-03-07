/*

BOM Topic 1️⃣ — window Object

The window object is the top-level object in the browser.

Everything in the browser is inside window.

Example:
console.log(window);

This prints the entire browser environment.

1️⃣ Global Object

In the browser, window is the global object.

Example:
var a = 10;
console.log(window.a);

Output:
10

Because:
global variables → become properties of window


2️⃣ Many APIs Come From window

Examples:

alert()
setTimeout()
setInterval()
console
document
location
history
navigator

All actually belong to window.

Example:

window.alert("Hello");

3️⃣ window.document

The DOM lives inside window.

window
   │
   └── document

Example:
console.log(window.document);

Same as:
console.log(document);

4️⃣ Window Size

You can get the browser size.

console.log(window.innerWidth);
console.log(window.innerHeight);

Example output:

1920
1080

5️⃣ Opening New Windows

Example:

window.open("https://google.com");

This opens a new tab/window.

6️⃣ Page Reload

window.location.reload();

Reloads the page.


Important Concept

In the browser:
window = global object

So these are the same:
window.console.log("Hello");
console.log("Hello");

window
 ├── document (DOM)
 ├── location
 ├── history
 ├── navigator
 ├── screen
 └── timers

 everything belongs to window

 
*/