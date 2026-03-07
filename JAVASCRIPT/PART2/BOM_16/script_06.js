/*
6️⃣ setTimeout() and setInterval()

1️⃣ setTimeout()

Runs a function once after a delay.

Syntax:

setTimeout(callback, delay);

Example:

setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

Explanation:

2000 milliseconds = 2 seconds

Flow:

timer starts
↓
2 seconds pass
↓
function executes

Output:

Hello after 2 seconds
Example
console.log("Start");

setTimeout(() => {
  console.log("Delayed message");
}, 2000);

console.log("End");

Output:

Start
End
Delayed message

Because setTimeout runs asynchronously.

2️⃣ setInterval()

Runs a function repeatedly at a fixed interval.

Syntax:

setInterval(callback, delay);

Example:

setInterval(() => {
  console.log("Runs every 2 seconds");
}, 2000);

Output:

Runs every 2 seconds
Runs every 2 seconds
Runs every 2 seconds

It continues until stopped.

3️⃣ clearTimeout()

Stops a timeout before it runs.

Result:
timeout cancelled

Example:
*/

const id = setTimeout(() => {
  console.log("Hello");
}, 3000);

clearTimeout(id);

/*
4️⃣ clearInterval()

Stops a repeating interval.

*/

const ide = setInterval(() => {
  console.log("hey");
}, 2000);

setTimeout(() => {
  clearInterval(ide);
}, 5000);
