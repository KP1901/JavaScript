const cart = [
  { name: "apple", price: 30 },
  { name: "banana", price: 10 },
  { name: "mango", price: 50 },
];

const totalPrice = cart.reduce((acc, currObj) => acc + currObj.price, 0);

console.log(totalPrice);

const numbers = [1, 2, 3, 4, 5, 6];

const res = numbers.reduce(
  (acc, currVal) => {
    currVal % 2 == 0 ? acc.even.push(currVal) : acc.odd.push(currVal);
    return acc;
  },
  {
    even: [],
    odd: [],
  },
);
console.log(res);
