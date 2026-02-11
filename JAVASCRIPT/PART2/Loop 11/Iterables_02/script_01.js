let arr = [10, 20, 30];

let iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/*
Array is an object.
Symbol.iterator is a method (on Array.prototype).
We access it using bracket notation and call it immediately.
It returns an iterator object.
That iterator object has a .next() method which controls iteration.
*/