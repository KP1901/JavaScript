const book = {
  name: "Age of Pirates",
  Author: "Kiran P.",
};

function bookInfo() {
  Object.keys(this).forEach((key) => {
    console.log(`${key} : ${this[key]} `);
  });
}

const boundFn = bookInfo.bind(book);
boundFn();
