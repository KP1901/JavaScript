// 1 nested scope

let x = 10;

function outer() {
  let y = 20;

  function inner() {
    let z = 30;
    console.log(x, y, z);
  }
  inner();
}
outer();

/*
✅ The inner function can access everything outside of it (called the scope chain).
❌ Outer cannot access inner’s variables.
*/

function outerFn() {
  function innerFn() {
    return "inner";
  }
  console.log(innerFn());

  return "outer";
}
console.log(outerFn());
