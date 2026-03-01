function createFunction() {
  let arr = [];
  for (var i = 1; i <= 3; i++) {
    arr.push(function () {
      return i;
    });
  }
  return arr;
}
const fns = createFunction();
console.log(fns[0]());
console.log(fns[1]());
console.log(fns[2]());
