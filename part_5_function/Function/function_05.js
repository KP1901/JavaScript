// console.log vs return in normal function

//Example 1: Using console.log inside a function

function add(a, b) {
  console.log(a + b);
}
add(5, 4);
let result = add(5, 5);
console.log(result); // undefined

// Example 2: Using return

function adds(a, b) {
  return a + b;
}
let re = adds(5, 10);
console.log(re);

/*
return sends the value to where the function was called.

Now we can store it, use it in calculations, or print it later.

✅ Key Points

Use console.log() to see output immediately.

Use return when you want to use the value later.

A function without return will always return undefined if you try to store it.
*/