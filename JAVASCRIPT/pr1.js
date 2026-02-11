let fibonacci = {
  limit: 100,
  [Symbol.iterator]() {
    let i = 0;

    return {
      next() {
        while (i < this.limit) {
          if (i < this.limit) {
            i++;
            return { value: i, done: false };
          } else {
            return { value: undefined, done: true };
          }
        }
      },
    };
  },
};

for (const item of fibonacci) {
  console.log(item);
}
