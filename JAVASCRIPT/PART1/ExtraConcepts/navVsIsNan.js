//   is nan

// case 1

let pointer = 0;
if (isNaN(pointer)) {
  console.log("it is NaN");
}

console.log(Number.isNaN(pointer));

console.log("\n");

console.log(isNaN("abc")); // converted into number and it is not a number
console.log(isNaN(123)); // converted into umber and it is a number
console.log(isNaN("123")); // converted into number and it is a number
console.log(isNaN(null)); // converted into number and it is a number
console.log(isNaN("123a")); // converted into number (type corecion) &it is not a number
console.log(isNaN(undefined));
console.log(isNaN(NaN));
console.log("\n");

// case 2 Number.isNaN -> introduced in es6

console.log(Number.isNaN("abc")); // no conversion
console.log(Number.isNaN(123)); // no conversion
console.log(Number.isNaN("123")); // no conversion
console.log(Number.isNaN(null)); // no conversion
console.log(Number.isNaN("123a")); // no conversion
console.log(Number.isNaN(undefined)); // no conversion
console.log(Number.isNaN(NaN)); // truly nan value so returns true
console.log(Number.isNaN(0 / 0)); // truly nan value so returns true
console.log("\n");

//

function divide(a, b) {
  let result = a / b;
  if (Number.isNaN(result)) {
    return "Error : Division Result In Nan";
  } else {
    return result;
  }
}
console.log(divide(10, 5));
console.log(divide(1, 2));
console.log(divide(0, 0));
