const user = {
  data: "kiran",
  [Symbol.iterator]() {
    let i = 0;
    let data = this.data;
    return {
      next() {
        if (i < data.length) {
          let ch = data[i];
          i++;
          return { value: ch, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

for (const el of user) {
  console.log(el);
}
