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
