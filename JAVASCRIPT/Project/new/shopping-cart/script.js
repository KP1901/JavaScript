const products = [
  {
    id: 1,
    name: "laptop",
    price: 50000,
  },
  {
    id: 2,
    name: "Mouse",
    price: 500,
  },
  {
    id: 3,
    name: "Keyboard",
    price: 1000,
  },
];

const carts = [];

const productList = document.querySelector(".product-list");
const cartList = document.querySelector(".cart-list");

// const view = {
//   productList: document.querySelector(".product-list"),
//   product: productList.querySelector(".product"),

// const controller = {
//   init() {
//     view.product.addEventListener("click", (e) => {
//       console.log(e.target);
//     });

//
//   },
// };
// controller.init();

function createProductElement(product) {
  let productEl = document.createElement("div");
  productEl.className = "product";
  productEl.dataset.id = product.id;

  let productInfo = document.createElement("div");
  productInfo.className = "product-info";

  let productNameEl = document.createElement("h3");
  productNameEl.className = "product-name";
  productNameEl.textContent = product.name;

  let productPriceEl = document.createElement("p");
  productPriceEl.className = "product-price";
  productPriceEl.textContent = `₹${product.price}`;

  let cartButton = document.createElement("button");
  cartButton.className = "cart-button";
  cartButton.textContent = "Add to Cart";
  productInfo.append(productNameEl, productPriceEl);
  productEl.append(productInfo, cartButton);
  productList.append(productEl);
}

products.forEach((product) => {
  createProductElement(product);
});

productList.addEventListener("click", (e) => {
  if (e.target.classList.contains("cart-button")) {
    let product = e.target.closest(".product");
    let id = Number(product.dataset.id);

    let productObject = products.find((product) => product.id === id);

    let cartProduct = carts.find((product) => product.id === id);

    if (cartProduct) {
      cartProduct.quantity++;
      renderCart();
    } else {
      let newCartProduct = {
        ...productObject,
        quantity: 1,
      };
      carts.push(newCartProduct);
      renderCart();
    }
  }
});
function renderCart() {
  cartList.innerHTML = "";

  carts.forEach((cartProduct) => {
    createCartElement(cartProduct);
  });
}

function createCartElement(cartProduct) {
  let Subtotal = cartProduct.price * cartProduct.quantity;

  console.log(cartProduct);

  const cartProductElement = document.createElement("div");
  cartProductElement.className = "cart-product";

  const cartProductTopEl = document.createElement("div");
  cartProductTopEl.className = "cart-product-top";

  const productNameEl = document.createElement("div");
  productNameEl.className = "product-name";
  productNameEl.textContent = cartProduct.name;

  const productPriceEl = document.createElement("div");
  productPriceEl.className = "product-price";
  productPriceEl.textContent = `₹${cartProduct.price}`;

  const removeButtonEl = document.createElement("button");
  removeButtonEl.className = "remove-button";
  removeButtonEl.textContent = "Remove";

  const qtySectionEl = document.createElement("div");
  qtySectionEl.className = "qty-section";

  const qtyIncrementBtnEl = document.createElement("button");
  qtyIncrementBtnEl.className = "qty-btn increment";
  qtyIncrementBtnEl.textContent = "+";

  const quantityEl = document.createElement("span");
  quantityEl.textContent = cartProduct.quantity;

  const qtyDecrementBtnEl = document.createElement("button");
  qtyDecrementBtnEl.className = "qty-btn decrement";
  qtyDecrementBtnEl.textContent = "-";

  const subTotalEl = document.createElement("div");
  subTotalEl.className = "subtotal";
  subTotalEl.textContent = `Subtotal ${Subtotal}`;

  qtySectionEl.append(qtyDecrementBtnEl, quantityEl, qtyIncrementBtnEl);
  cartProductTopEl.append(productNameEl, productPriceEl, removeButtonEl);
  cartProductElement.append(cartProductTopEl, qtySectionEl, subTotalEl);
  cartList.append(cartProductElement);
}

/*
IMP Notes:

1.if you create elements dynamically then use event delegation
2.if state changes then first clear ui in render then creates the elements

*/
