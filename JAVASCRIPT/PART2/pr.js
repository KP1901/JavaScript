const range = {
  name: "kiran",
  [Symbol.iterator]() {
    let i = 0;
    let name = this.name;
    return {
      next() {
        if (i < name.length) {
          let ch = name[i];
          i++;
          return {
            value: ch,
            done: false,
          };
        } else {
          return {
            value: undefined,
            done: true,
          };
        }
      },
    };
  },
};

for (const ch of range) {
  console.log(ch);
}
