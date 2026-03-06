/*
4️⃣ Changing Styles and Classes

In real applications we often need to:
-change colors
-show / hide elements
-activate buttons
-switch dark mode

This is done using:
style
classList

1️⃣ Changing Styles with style

2️⃣ Using classList (Best Practice)

Instead of changing styles directly, developers usually add or remove CSS classes.

Example CSS:

.dark {
  background: black;
  color: white;
}
  
3️⃣ classList.add() => add a class

Example :

const box = document.querySelector("#box");
box.classList.add("active");

4️⃣ classList.remove() => remove a class

Example :

const box = document.querySelector("#box");
box.classList.remove("active");

5️⃣ classList.toggle() ⭐

Adds class if not present
Removes class if present.

box.classList.toggle("dark");

this is used For:   
dark mode
dropdown menus
show / hide UI

6️⃣ Checking if class exists

box.classList.contains("dark");

returns true / false

Quick Summary
element.style.property → change CSS directly
classList.add()        → add class
classList.remove()     → remove class
classList.toggle()     → add/remove automatically
classList.contains()   → check class
*/
