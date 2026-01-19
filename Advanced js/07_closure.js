debugger;

function outer() {
  let outerVar = "I am outer"; // outer function variable

  function inner() {
    console.log(outerVar); // inner function accessing outerVar
  }

  return inner;
}

const innerFunc = outer(); // outer() finishes execution
innerFunc(); // "I am outer" ← still accessible!

// data privacy

function createCounter() {
  let count = 0; // private variable

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2
console.log(counter.count); // undefined (cannot access directly)

// m