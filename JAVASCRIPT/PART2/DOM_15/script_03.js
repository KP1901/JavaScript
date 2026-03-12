/*
3️⃣ DOM Manipulation (Changing Content)

Select element
     ↓
Modify content
     ↓
Browser updates UI

1️⃣ textContent

Used to change or read text inside an element.

Example

HTML
<h1 id="title">Hello</h1>

JavaScript
const title = document.querySelector("#title");

title.textContent = "Welcome";

Result in browser:

Welcome

textContent treats everything as plain text.

title.textContent = "<b>Hello</b>";

output :
<b>Hello</b>

2️⃣ innerHTML

innerHTML allows inserting real HTML.

Example:
title.innerHTML = "<b>Hello</b>";

Output:
Hello (bold)

Browser parses the HTML.

3️⃣ Difference Between textContent and innerHTML

| Feature       | textContent | innerHTML                       |
| ------------- | ----------- | ------------------------------- |
| Supports HTML | ❌ No        | ✅ Yes                           |
| Faster        | ✅ Yes       | ❌ Slightly slower               |
| Safer         | ✅ Yes       | ❌ Can be unsafe with user input |

Developers prefer:

textContent

unless HTML is required.
*/