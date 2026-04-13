function multiply(x) {
  return x * 3;
}

function add(x) {
  return x + 2;
}

function pipe(f, g) {
  return function (x) {
    return g(f(x));
  };
}
let result = pipe(add, multiply);
console.log(result(5));
