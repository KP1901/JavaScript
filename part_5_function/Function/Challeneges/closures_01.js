function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }
  function decrement() {
    count--;
    console.log(count);
  }
  return { increment, decrement };
}
let counter1 = createCounter();

counter1.increment();
counter1.increment();
counter1.decrement();
counter1.decrement();
counter1.increment();

let counter2 = createCounter();
counter2.increment();
counter2.increment();
counter2.increment();