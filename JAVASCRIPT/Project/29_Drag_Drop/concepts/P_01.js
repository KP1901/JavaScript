// insertBefore

const list = document.getElementById("list");

const newItem = document.createElement("li");
newItem.textContent = "C";

const secondItem = list.children[1];

list.insertBefore(newItem, secondItem);

/*
Syntax:

parent.insertBefore(newNode, referenceNode);

parent → the container
newNode → element you want to insert
referenceNode → element before which you insert
*/