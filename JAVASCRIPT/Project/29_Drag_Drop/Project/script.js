const leftBox = document.getElementById("left");
const rightBox = document.getElementById("right");
const lists = document.querySelectorAll(".list");

let selected = null;

// Drag start & end
lists.forEach((list) => {
  list.addEventListener("dragstart", function () {
    selected = this; // always the .list element
  });

  list.addEventListener("dragend", function () {
    selected = null;
  });
});

// Apply same logic to both containers
[leftBox, rightBox].forEach((box) => {
  box.addEventListener("dragover", function (e) {
    e.preventDefault();

    const y = e.clientY;

    // ONLY items inside current container
    const items = [...box.querySelectorAll(".list")];

    for (const item of items) {
      if (item === selected) continue;

      const rect = item.getBoundingClientRect();
      const middle = rect.top + rect.height / 2;

      if (y < middle) {
        box.insertBefore(selected, item);
        return;
      }
    }

    // If no item matched → append at end
    box.appendChild(selected);
  });
});
/*

Lesson 1 :

-always maintain the reality of state management
-if we remove dragend it will store the dragged element after dragend even if we didnt selected

Lessson 2 :
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

Lesson 5: 

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
-----------------------------------
*/

/*
lesson :
-drop fires only ones
- only when release the mouse
- can record cursor and hover item

lesson :
-dragover fires again and agiain
You always know:
-current cursor position
-current hovered item

lesson :
Use dragover when you want live sorting / reordering while dragging.
Use drop when you only want to place the item once at the end.

lesson :
e.clientX gives the current live X position of the cursor relative to the viewport, not the left box.
Same for e.clientY.

lesson :
-elementFromPoint(x, y) returns the element that is directly under that cursor point.
-must have veiwport coordinates
-“Which element is physically under this pixel?”
-it could return any element(child element also like span ,img element)
-.closest(".list") returns the nearest ancestor (or itself) that has the class .list`.

lesson :
immediately stop the current drag over
dragover event fires → handler runs → return → handler stops

lesson : 
if (!hoverItem || hoverItem === selected) return;

This line stops the handler when the dragged element and the hovered element are the same, so the item stays in its current position.


lesson :

-elementFromPoint() is not guaranteed to return the element under the cursor because the dragged element is rendered in a separate drag layer.
-so avoid elementFromPoint() in production
-so Iterate through list items
    Compare cursor Y with each item’s midpoint
    Insert before the first match
*/
