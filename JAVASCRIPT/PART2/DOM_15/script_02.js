/*
2️⃣ Selecting Elements from DOM

Before changing anything in a webpage, JavaScript must first find the element in the DOM.

DOM Tree
   ↓
Select element
   ↓
Store in variable
   ↓
Manipulate it

HTML
<h1 id="title">Hello</h1>

Javascript
const el = document.getElementById("title");

1️⃣ getElementById() => Selects an element using its id.
2️⃣ getElementsByClassName() => Selects elements using class name.

html:

<p class="item">Apple</p>
<p class="item">Banana</p>
<p class="item">Mango</p>

js: 
const items = document.getElementsByClassName("item");

o/p : 
HTMLCollection(3)

3️⃣ getElementsByTagName() => Selects elements using tag name.

<p>Apple</p>
<p>Banana</p>
<p>Mango</p>

js: 
const paragraphs = document.getElementsByTagName("p");

Output:
HTMLCollection

4️⃣ querySelector() ⭐ (Most used) => Uses CSS selectors.

Syntax:

document.querySelector("selector")

Examples:
Select by id
document.querySelector("#title");

Select by class
document.querySelector(".item");

Select by tag
document.querySelector("p");

Important:
Returns only the FIRST match

5️⃣ querySelectorAll() => Selects all matching elements.

Js:
const els = document.querySelectorAll(".item");

Output:
NodeList(3)

els.forEach(el => {
  console.log(el.textContent);
});

| Method                 | Returns        |
| ---------------------- | -------------- |
| getElementById         | single element |
| getElementsByClassName | HTMLCollection |
| getElementsByTagName   | HTMLCollection |
| querySelector          | first element  |
| querySelectorAll       | NodeList       |

HTMLCollection vs NodeList :

HTMLCollection : 

-Live collection 
-Updates automatically if DOM changes.

NodeList :

-Static collection
-Does not update automatically.

But supports:

forEach()

What developers use most
Modern JavaScript mostly uses:

querySelector
querySelectorAll

Example:

const btn = document.querySelector("#btn");
const items = document.querySelectorAll(".item");

*/
