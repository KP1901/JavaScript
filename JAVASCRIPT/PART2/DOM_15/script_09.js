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

IMP:
1. In event delegation we attach the event listener to a parent element.

2. When a child element (like li) is clicked,
   the event bubbles up from child → parent.

3. The parent listener catches the event.

4. e.target tells which child element actually triggered the event.

5. This avoids attaching many event listeners.

6. It also works for dynamically added elements.

Event Delegation
→ relies on bubbling
→ usually don't use stop propagation

Nested event control
→ sometimes use stopPropagation() 

**Most Important:**

1. If the event bubbles up to the HTML element, it usually does not matter unless those elements have their own event listeners.

2. Event bubbling always travels upward in the DOM (target → parent → body → html → document), whether we use event delegation or not.

3. Event delegation simply takes advantage of this bubbling behavior by attaching the event listener to a parent element.

4. If needed, we can stop the bubbling at any level using `event.stopPropagation()`.

*/
