let powerOfTwo = {
  [Symbol.iterator]() {
    let start = 1;
    let count = 5;
    return {
      next() {
        if (start <= count) {
          let value = start * 2;
          return { value: value, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};
for (const ele of powerOfTwo) {
  console.log(ele);
}


/*
1️⃣ JS sees the for...of loop

for (let num of range) {
  console.log(num);
}

JavaScript thinks:

“range is on the right side of of.
I need an iterator.”

2️⃣ JS looks for Symbol.iterator

Behind the scenes JS does:
range[Symbol.iterator]

It exists, so range is iterable ✅
JS then calls it

const iterator = range[Symbol.iterator]();

3️⃣ Symbol.iterator() runs

Inside this function:

let current = this.start; // 1
let end = this.end;       // 3


A new iterator object is created and returned:

{
  next() { ... }
}


current and end are kept alive via closure
*/