const range = {
  start: 1,
  end: 3,
  [Symbol.iterator]() {
    let current = this.start;
    let end = this.end;
    return {
      next() {
        if (current <= end) {
          return { value: current++, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

const iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());

for (let num of range) {
  console.log(num);
}

/*
🧠 What you SHOULD remember (WRITE THIS)

-Iterables power for...of
-Symbol.iterator makes objects iterable
-Iteration = calling next() repeatedly
-Spread works because of iterables
-Generators are cleaner iterators

“An iterable is any object that implements Symbol.iterator, which returns an iterator whose next() method produces { value, done } pairs.”

JavaScript introduced the Iterable & Iterator protocol to provide a common, standard way to iterate over different data structures (arrays, strings, maps, sets, etc.) in a consistent manner.
It allows values to be produced one at a time (lazy iteration), instead of all at once.

🔹 What WOULD break without iterable/iterator protocol?

These would NOT work:

❌ for...of
❌ Spread in arrays [...x]
❌ Destructuring [a, b] = x
❌ Promise.all(iterable)
❌ Map, Set iteration

Because all of these depend on iterables.

| Loop / Feature    | Needs iterable protocol? |
| ----------------- | ------------------------ |
| `for`             | ❌ No                     |
| `for...in`        | ❌ No                     |
| `forEach`         | ❌ No                     |
| `for...of`        | ✅ Yes                    |
| Spread (`[...x]`) | ✅ Yes                    |
| Destructuring     | ✅ Yes                    |

*/
