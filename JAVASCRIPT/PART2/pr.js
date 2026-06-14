function add(a) {
  return function (b, c) {
    return a + b + c;
  };
}

let addBy2 = add(10);
console.log(addBy2(30, 20));

