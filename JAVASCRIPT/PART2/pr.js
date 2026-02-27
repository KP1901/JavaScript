function add(a) {
  let total = a;
  return function inner(b) {
    if (b === undefined) {
      return total;
    } else {
      total += b;
    }
    return inner;
  };
}
console.log(add(10)(20)(30)(40)());
