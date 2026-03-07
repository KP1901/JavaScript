/*
BOM Topic 3️⃣ — history Object

The history object lets JavaScript interact with the browser’s navigation history.

Example history stack:

Page A
Page B
Page C  ← current page

-The browser keeps a stack of visited pages.
-JavaScript can move back or forward in this stack.

1️⃣ history.back()

Moves one page back.

history.back();

Same as pressing the browser back button.

2️⃣ history.forward()

Moves one page forward.

history.forward();

3️⃣ history.go()

Moves multiple steps in history.

Example:

history.go(-1); // back one page
history.go(-2); // back two pages
history.go(1);  // forward one page

4️⃣ history.length

Shows number of pages in history stack.

console.log(history.length);
*/
