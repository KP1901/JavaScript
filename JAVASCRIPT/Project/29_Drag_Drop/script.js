let lists = document.querySelectorAll(".list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

let selected = null;

Array.from(lists).forEach((list) => {
  list.addEventListener("dragstart", (e) => {
    selected = e.currentTarget;
  });

  list.addEventListener("dragend", () => {
    selected = null;
  });
});

rightBox.addEventListener("dragover", (e) => {
  e.preventDefault();
});

rightBox.addEventListener("drop", () => {
  rightBox.append(selected);
});

// adding event listener to element

leftBox.addEventListener("dragover", (e) => {
  e.preventDefault();

  // const x = e.clientX;
  // const y = e.clientY;

  // const elementBelowCursor = document.elementFromPoint(x, y);

  // if (!elementBelowCursor) {
  //   return;
  // }

  // const hoverItem = elementBelowCursor.closest(".list");

  // // ✅ FIX 3: strong guard
  // if (!hoverItem || hoverItem === selected) return;

  // const rect = hoverItem.getBoundingClientRect();
  // const middle = rect.top + rect.height / 2;

  // if (y < middle) {
  //   leftBox.insertBefore(selected, hoverItem);
  // } else {
  //   leftBox.insertBefore(selected, hoverItem.nextSibling);
  // }
  const y = e.clientY;
  const items = [...leftBox.querySelectorAll(".list")];

  for (const item of items) {
    if (item === selected) continue;

    const rect = item.getBoundingClientRect();
    const middle = rect.top + rect.height / 2;
    console.log(middle);

    if (y < middle) {
      leftBox.insertBefore(selected, item);
      return;
    }
  }
  leftBox.append(selected);
});

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
