let prices = new Map();

prices.set("apple", 100);
prices.set("banana", 100);
prices.set("orange", 100);
prices.set("chiku", 100);

console.log(prices);

for (const Entry of prices) {
  console.log(Entry);
}
let total = 0;
for (const [key, value] of prices) {
  total += value;
}
console.log(total);
/*
❓ What does for...of prices iterate over?

👉 A Map is iterable
👉 By default, it iterates over its entries

Each iteration gives one entry as an array:

[key, value]

So internally this happens:

for (const entry of prices) {
  entry = ["apple", 100]
  entry = ["banana", 100]
  entry = ["orange", 100]
  entry = ["chiku", 100]
}

Iterable → has an iterator (Symbol.iterator)
Array → is an iterable AND has index-based storage + length
*/

let arr = [1, 2, 3];

let iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
