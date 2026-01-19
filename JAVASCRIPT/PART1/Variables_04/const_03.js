// const - keyword

const book = "The Habit";

// 1 - functioned scope - yes

function getBook() {
  const fname = "kiran";
  console.log(fname);
}
getBook();
// console.log(fname); // error

// 2 - blocked scoped - yes

if (true) {
  let marks = 90;
}
// console.log(marks);

// 3 .reassign -no

const count = 20;
count = 30;
console.log(count);

// 4. redeclared - no

// let count = 30; // not allowed

// 5 hoisting -  hoisted but not initialized

console.log(age);

const age = 20;
