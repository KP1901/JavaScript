const leftEl = document.getElementById("left");
const rightEl = document.getElementById("right");
const listsEl = document.querySelectorAll(".list");

let selected = null;

Array.from(listsEl).forEach((list) => {
  list.addEventListener("dragstart", (e) => {
    selected = e.currentTarget;
  });
  list.addEventListener("dragend", () => {
    selected = null;
  });
});

rightEl.addEventListener("dragover", (e) => {
  e.preventDefault();

  const y = e.clientY;
  const items = [...rightEl.querySelectorAll(".list")];

  for (const item of items) {
    const rect = item.getBoundingClientRect();
    const middle = rect.top + rect.height / 2;

    // console.log("middle", middle);
    // console.log("y", y);

    if (item === selected) continue;

    if (y < middle) {
      rightEl.insertBefore(selected, item);
      return;
    }
  }

  rightEl.append(selected);
});

leftEl.addEventListener("dragover", (e) => {
  e.preventDefault();

  let y = e.clientY;
  let items = [...leftEl.querySelectorAll(".list")];

  for (const item of items) {
    const rect = item.getBoundingClientRect();
    const middle = rect.top + rect.height / 2;

    if (selected === item) continue;

    if (y < middle) {
      leftEl.insertBefore(selected, item);
      return;
    }
  }
  leftEl.append(selected);
});
/*

Lessson 1 :
draggable = true => makes element draggable

Lesson 2 :
-dragstart starts the drag operation and tells the browser what is being dragged.
-dragover decides whether a place is allowed to accept a drop.
-drop performs the actual drop at that allowed place.(not ideal here)
-Browsers block dropping by default because they already have built-in drag behaviors.
-e.preventDefault() cancels that default behavior and allows our custom drop logic to work.

lesson 3: 
Event listeners should not be nested unnecessarily.
Drag events belong to draggable elements, while drop events belong to drop targets.

Lesson 4 :
Items 1–3 are handled by
“insert before the first item below the cursor”,
and the last position is handled by append.

Lesson : 

Drag-over sorting flow (LEFT or RIGHT box)

1️⃣ dragover event fires on the container
→ user is dragging inside the box

2️⃣ Prevent default behavior
→ allow dropping

3️⃣ Read current cursor Y position
→ needed to decide placement

4️⃣ Get all .list items inside this container
→ current visual order

5️⃣ Loop items from top to bottom

6️⃣ For each item:

get its top position

calculate its vertical middle

skip if it’s the dragged item

7️⃣ Compare cursor with item middle

if cursor is above → insert dragged item before this item

stop execution

8️⃣ If no item matched
→ append dragged item at the end of the container

Lesson 9:

To the point, with one tiny correction 👇

append() / appendChild()
→ always inserts at the end of the parent

insertBefore(item1, item2)
→ inserts item1 before item2

Drag-drop connection (1 line):

Drop at end → append()
Drop before a specific item → insertBefore()


Lesson 10:

elementFromPoint(x, y)
→ returns the top-most element under the cursor
→ browser can return ANY element (text, icon, child, wrapper)

closest(selector)
→ moves upward from that element to find the intended parent

⚠️ Why it’s unreliable for drag sorting

Cursor may be over:
 -text node
 -icon
 -padding
 -empty space
Result can change frame-by-frame
Causes jitter / wrong insert target

✅ Conclusion (important)

elementFromPoint is not stable for sortable lists

✔️ Best practice

Use dragover + getBoundingClientRect() on list items
Compare cursorY with item’s middle

Lesson 11:

for...of is used because it allows:

continue → skip the dragged item
return / break → stop the loop immediately after insertion

forEach cannot:

❌ break
❌ return (only returns from callback, not loop)

Lesson (big lesson) :

👉 We don’t hover items — we compare cursor Y with all item centers.which already computed when you little drag 
*/
