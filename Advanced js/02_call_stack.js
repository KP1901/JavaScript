function first() {
  console.log("Inside first");
  second();
}

function second() {
  console.log("Inside second");
  third();
}

function third() {
  console.log("Inside third");
}

console.log("Start");
first();
console.log("End");
