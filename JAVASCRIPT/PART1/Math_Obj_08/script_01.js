// 1 Math.floor()

console.log(Math.floor(2.4)); //2
console.log(Math.floor(2.99)); // yiske lye 2 ground hai
console.log(Math.floor(-2.99)); // yiske liye 3 ground hai
console.log();

// 2 Math.ceil()

console.log(Math.ceil(2.4)); // 3
console.log(Math.ceil(2.99)); // yiske liye 3 ceil hai
console.log(Math.ceil(-2.99)); // yiske liye 2 ceil hai
console.log();

// 3.Math.round()

console.log(Math.round(2.99)); // jiske close hoga consider
console.log(Math.round(2.2)); // jiske close hoga consider
console.log(Math.round(-2.2)); // jiske close hoga consider

// 4.Math.random() => returns number between 0 to 1 (0.02, 0.03, 0.99 it could be anything)
console.log(Math.random());

// range 1 =>  Range is 0 ≤ x < 20
console.log(Math.random() * 20);

// range 2 => Range is 0 ≤ x < 21
console.log(Math.random() * 21);

// range 3 => Range is 1 ≤ x < 22
console.log(Math.random() * 21 + 1);

// universal formula
let min = 10;
let max = 20;
console.log(Math.floor(Math.random() * max - min + 1) + min);

/*

So:
0–19 → min=0, max=19
0–20 → min=0, max=20
1–20 → min=1, max=20
*/
