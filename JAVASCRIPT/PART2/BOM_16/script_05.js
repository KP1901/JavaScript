/*

BOM Topic 5️⃣ — screen Object

The screen object provides information about the user’s display screen.

It belongs to the window object.

window.screen

Usually written as:

screen

1️⃣ screen.width

-Gets the total width of the user's screen in CSS pixels.
-Includes everything:
   -taskbar
   -system UI
   -unused screen areas
-Not related to browser width.

console.log(screen.width);

Example output:

1920

Meaning the screen resolution width is 1920px.

2️⃣ screen.height

Gets the total height of the user's screen in CSS pixels.

Includes taskbar and all system UI.

console.log(screen.height);

Example:

1080

Meaning the screen height is 1080px.


3️⃣ screen.availWidth

❗ This part in your notes needs correction.

Correct definition:

-Gets the available screen width excluding OS UI that occupies horizontal space.
-It does NOT mean browser width.

Examples of horizontal UI:

-taskbar on left
-taskbar on right
-system dock

Example:
console.log(screen.availWidth);

Example output:
1840

If:
screen.width = 1920
taskbar on left = 80px

Then:
availWidth = 1840

If the taskbar is bottom (common case):

screen.width = screen.availWidth

4️⃣ screen.availHeight

Gets the available height excluding OS UI occupying vertical space.

Examples:

-taskbar at bottom
-taskbar at top

console.log(screen.availHeight);

Example:

1040

If:

screen.height = 1080
taskbar height = 40px

Then:

availHeight = 1040

Correct Concept Summary


| Property             | Meaning                                 |
| -------------------- | --------------------------------------- |
| `screen.width`       | Total screen width                      |
| `screen.height`      | Total screen height                     |
| `screen.availWidth`  | Screen width minus OS UI on left/right  |
| `screen.availHeight` | Screen height minus OS UI on top/bottom |

*/
