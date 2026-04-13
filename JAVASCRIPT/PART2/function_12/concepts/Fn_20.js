/*
🔹 1. compose (RIGHT → LEFT)

👉 Execution goes right to left

🔹 Rule for compose
compose(f, g)(x) = f(g(x))

👉 Start from RIGHT

✔ First: g(x)
✔ Then: f(result)

*/

function multiply(x) {
  return x * 3;
}

function add(x) {
  return x + 2;
}

function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}
let result = compose(add, multiply);
console.log(result(5));

// 5 → multiply3 → 15 → add2 → 17

/*
🔹 2. pipe (LEFT → RIGHT)

👉 Execution goes left to right (more natural)

🔹 Rule for pipe

pipe(f, g)(x) = g(f(x))

👉 Start from RIGHT

✔ First: f(x)
✔ Then: g(result)

*/

function multiply(x) {
  return x * 3;
}

function add(x) {
  return x + 2;
}

function pipe(f, g) {
  return function (x) {
    return g(f(x));
  };
}
let result2 = pipe(add, multiply);
console.log(result2(5));

/*
| Feature     | compose      | pipe         |
| ----------- | ------------ | ------------ |
| Direction   | Right → Left | Left → Right |
| Readability | Less natural | More natural |
| Usage       | Math style   | Practical JS |

*/
