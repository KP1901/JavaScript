function sum(a) {
  let total = a;
  return function inner(b) {
    if (b === undefined) {
      console.log(total);
    }
    total += b;
    return inner;
  };
}
sum(10)(20)(30)(40)();
