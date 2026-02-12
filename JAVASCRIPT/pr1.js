const book = {
  name: "Million of Word",
};

function description(author, price) {
  console.log(`${this.name} ${author} ${price}`);
}

description.call(book, "Kiran", 500);
