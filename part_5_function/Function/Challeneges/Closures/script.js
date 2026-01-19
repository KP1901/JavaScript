function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => (count <= 0 ? (count = 0) : --count),
    reset: () => (count = 0),
    getValue: () => count,
  };
}
const container = document.getElementById("container");

const addCounter = document.getElementById("addCounter");

function createCounterUi() {
  const counterObj = createCounter();

  const counter = document.createElement("div");
  counter.className = "counter";

  const count = document.createElement("div");
  count.className = "count";
  count.textContent = counterObj.getValue();

  const increment = document.createElement("button");
  increment.className = "increment";
  increment.textContent = "+";
  increment.addEventListener("click", function () {
    count.textContent = counterObj.increment();
  });

  const decrement = document.createElement("button");
  decrement.className = "decrement";
  decrement.textContent = "-";
  decrement.addEventListener("click", function () {
    count.textContent = counterObj.decrement();
  });

  const resetBtn = document.createElement("button");
  resetBtn.className = "resetBtn";
  resetBtn.textContent = "Reset";
  resetBtn.addEventListener("click", function () {
    count.textContent = counterObj.reset();
  });

  counter.append(count, increment, decrement, resetBtn);

  container.appendChild(counter);
}
addCounter.addEventListener("click", createCounterUi);
