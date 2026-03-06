/*
9️⃣ Event Delegation

Using one parent event listener
to handle events for many child elements

It works because of event bubbling.

HTMl

<ul id="list">
  <li>Apple</li>
  <li>Banana</li>
  <li>Mango</li>
</ul>

Js :

const list = document.querySelector("#list");

list.addEventListener("click", (e) => {
  console.log(e.target.textContent);
});

Key Difference :
Event Propagation =>	How events travel through DOM
Event Delegation => 	Using bubbling to handle child events from parent
--------------------------------------------------------------------------
1️⃣ Event Propagation

-This describes how the event travels.
-The event always goes through the DOM like this:

document
 ↓   (capturing)
html
 ↓
body
 ↓
div
 ↓
button  🎯 target
 ↑
div
 ↑
body
 ↑
html
 ↑
document  (bubbling)

2️⃣ Event Delegation

-Event delegation does not change the travel path.
-The event still travels exactly the same way.
-But we attach the listener on the parent and catch the event during bubbling.

document ↓
html ↓
body ↓
ul ↓
li 🎯
li ↑
ul ↑  ← parent listener catches event
body ↑
html ↑
document ↑
*/
