const book = {
  name: "Age of Pirates",
  Author: "Kiran P.",
};
function bookDescription() {
  console.log(`
    Book : ${this.name}
    Author : ${this.Author}`);
}
const info = bookDescription.bind(book);
info();
