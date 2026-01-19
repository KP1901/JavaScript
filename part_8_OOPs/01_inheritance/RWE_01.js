// Laptop costs $1200, SKU: E123, Brand: Dell, Warranty: 2 years

function Product(name, price, sku) {
  this.name = name;
  this.price = price;
  this.sku = sku;
}
Product.prototype.getInfo = function () {
  return `${this.name} costs $ ${this.price},sku : ${this.sku}`;
};

function Electronics(name, price, sku, brand, warranty) {
  Product.call(this, name, price, sku);
  this.brand = brand;
  this.warranty = warranty;
}

Electronics.prototype = Object.create(Product.prototype);
Electronics.prototype.constructor = Electronics;

Electronics.prototype.getElectronicinfo = function () {
  return `${this.getInfo()}, Brand: ${this.brand}, Warranty: ${
    this.warranty
  } years`;
};

function Clothing(name, price, sku, size, material) {
  Product.call(this, name, price, sku);
  this.size = size;
  this.material = material;
}

Clothing.prototype = Object.create(Product.prototype);
Clothing.prototype.constructor = Clothing;

Clothing.prototype.getClothingInfo = function () {
  return `${this.getInfo()}, size: ${this.size}, material: ${this.material} `;
};

function Books(name, price, sku, author, pages) {
  Product.call(this, name, price, sku);
  this.author = author;
  this.pages = pages;
}

Books.prototype = Object.create(Product.prototype);
Books.prototype.constructor = Books;

Books.prototype.getBooksInfo = function () {
  return `${this.getInfo()}, author: ${this.author}, pages: ${this.pages} `;
};
// usage

const Laptop = new Electronics("Laptop", 30000, "c456", "dell", 2);
console.log(Laptop.getElectronicinfo());

const Book = new Books("Book", 500, "c459", "kiran", 200);
console.log(Book.getBooksInfo());
