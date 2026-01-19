// using bind

// function calculatePrice(taxRate, price, discount) {
//   return price - discount + price * taxRate;
// }

// const calculateGst = calculatePrice.bind(null, 0.18);
// console.log(calculateGst(1000, 100));

// const calculateVAT = calculatePrice.bind(null, 0.12);
// console.log(calculateVAT(1000, 100));

//  using manual closure

function calculatePrice(taxRate) {
  return function (price, discount) {
    return price - discount + price * taxRate;
  };
}
let calculateGst = calculatePrice(0.18);
console.log(calculateGst(1000, 10));

let calculateVST = calculatePrice(0.12);
console.log(calculateVST(1000, 10));
