/*
🔟 DOM Traversal

Moving from one element to another element in the DOM tree.

Sometimes you don't want to search the whole document again.
Instead, you move relative to the current element.

Example relationships:

Parent
Children
Siblings

HTml

<div id="box">
  <h1>Title</h1>
  <p>Paragraph</p>
  <button>Click</button>
</div>

Dom tree :

div
 ├── h1
 ├── p
 └── button


1️⃣ parentElement

Gets the parent of an element.

Example:

const btn = document.querySelector("button");
console.log(btn.parentElement);

Output:
<div id="box">...</div>


2️⃣ children

Gets all direct child elements.

Example:

const box = document.querySelector("#box");
console.log(box.children);

Output:

HTMLCollection(3)

Elements:
h1
p
button

Access child:
box.children[0]
box.children[1]
box.children[2]

3️⃣ firstElementChild

Gets the first child element.

box.firstElementChild

Output:

<h1>

4️⃣ lastElementChild

Gets the last child element.

box.lastElementChild

Output:

<button>

5️⃣ nextElementSibling

Moves to the next element on the same level.

Example:

const title = document.querySelector("h1");

console.log(title.nextElementSibling);

Output:

<p>

6️⃣ previousElementSibling

Moves to the previous element.

const p = document.querySelector("p");

console.log(p.previousElementSibling);

7️⃣ closest() ⭐ (very useful)

Finds the nearest ancestor that matches a selector.

Example:

btn.closest("#box");

Output:

<div id="box">

This is very useful in event delegation.
*/
