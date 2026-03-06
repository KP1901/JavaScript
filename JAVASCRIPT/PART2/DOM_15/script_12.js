/*
1️⃣2️⃣ DOM Performance Concepts

-When JavaScript changes the DOM, the browser must recalculate and redraw the page.
-This process can be expensive if done too many times.

Main performance concepts:

-Reflow
-Repaint
-Minimizing DOM updates
-DocumentFragment
-Batching DOM changes

1️⃣ Reflow (Layout)

Reflow happens when the browser must recalculate element positions and sizes.

Example triggers:

changing width
changing height
adding elements
removing elements

Example:

box.style.width = "200px";

Browser must recalculate layout.

Flow:

DOM change
↓
layout recalculation
↓
page update

This is expensive.

2️⃣ Repaint

Repaint happens when appearance changes but layout stays the same.

Example:

box.style.color = "red";

Only color changes.

Flow:

DOM change
↓
repaint

This is cheaper than reflow.

3️⃣ Too Many DOM Updates

Bad example:

for (let i = 0; i < 1000; i++) {
  const li = document.createElement("li");
  list.append(li);
}

Problem:

1000 DOM updates

Each update may trigger layout work.

4️⃣ Using DocumentFragment

Better approach:

const fragment = document.createDocumentFragment();

for (let i = 0; i < 1000; i++) {
  const li = document.createElement("li");
  fragment.append(li);
}

list.append(fragment);

Now:

1000 elements created
↓
1 DOM update

Much faster.

5️⃣ Batch DOM Updates

Instead of:

el.style.width = "200px";
el.style.height = "200px";
el.style.background = "red";

Better:

el.style.cssText = `
  width:200px;
  height:200px;
  background:red;
`;

Fewer DOM updates.

6️⃣ Avoid Repeated DOM Queries

Bad:

for (let i = 0; i < 1000; i++) {
  document.querySelector("#box").textContent = i;
}

Better:

const box = document.querySelector("#box");

for (let i = 0; i < 1000; i++) {
  box.textContent = i;
}
*/