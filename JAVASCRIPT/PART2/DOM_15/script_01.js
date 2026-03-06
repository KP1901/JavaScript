/*

1️⃣ What is DOM (Document Object Model)
Core idea of that concept
HTML → Browser parses → DOM Tree → JavaScript manipulates DOM

Important points we covered:

-DOM = JavaScript representation of HTML
-Browser converts HTML into a tree of objects
-Every element becomes a node
-JavaScript does not modify HTML directly
-JavaScript modifies DOM objects

Example:

HTML

<h1 id="title">Hello</h1>

JavaScript modifies the DOM node:

document.getElementById("title").textContent = "Hello Kiran";

HTML = structure
DOM = objects created by browser
JavaScript = controls those objects
*/
