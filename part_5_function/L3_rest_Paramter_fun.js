// 1. Mathematical Calculations (sum, average, etc.)

/*

 What is a rest parameter(...number)?
-It allows you to pass any number of arguments to the function.
-All the extra arguments are packed into an array named numbers.
-it must be last parameter
*/

function sum(...number) {
  return number;
}
console.log(sum(10, 20, 30, 40));

// key differences arguments vs ...rest
// 1

function getValue1(a, b) {
  console.log(a);
  console.log(b);
  console.log(arguments);
}
getValue1(10, 20, 30, 40);

function getValue(a, b, ...rest) {
  console.log(a);
  console.log(b);
  console.log(rest);
}
getValue(10, 20, 30, 40);

//  use cases

// sum

let totalSum = (...nums) => {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
};
console.log(totalSum(10, 20, 30));

// Separate by Type

function separateTypes(...types) {
  let obj = {};
  for (const type of types) {
    let typeOfValue = typeof type;
    if (!obj[typeOfValue]) {
      obj[typeOfValue] = [];
    }
    obj[typeOfValue].push(type);
  }
  console.log(obj);
}

separateTypes(1, "hi", true, 42, "JS");

// math operation

let calculate = (op, ...nums) => {
  let value = op === "mul" ? 1 : 0;

  for (const num of nums) {
    if (op === "add") {
      value += num;
    } else if (op === "mul") {
      value *= num;
    }
  }
  return value;
};
console.log(calculate("add", 10, 20, 30, 40));
console.log(calculate("mul", 10, 20, 30, 40));
