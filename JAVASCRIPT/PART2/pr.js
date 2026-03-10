class Calculator {
  add(...args) {
    let total = 0;
    for (const item of args) {
      total += item;
    }
    return total;
  }
}

const calc = new Calculator();

console.log(calc.add(5, 10));
console.log(calc.add(5, 10, 15));
console.log(calc.add(5, 10, 15, 20));
