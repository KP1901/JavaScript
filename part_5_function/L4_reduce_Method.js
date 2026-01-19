/*
conclusion/ definition
The reduce() method is used to take all elements of an array and "reduce" them into a single value (number, string, object, array, etc.) by repeatedly applying a function.

It’s often used for:
Summing numbers
Flattening arrays
Counting items
Grouping data
Calculating max/min

🔍 Syntax:

array.reduce((accumulator, currentValue, currentIndex, array) => {
  return updatedAccumulator;
}, initialValue)
accumulator	- The running result, passed to next iteration
currentValue -	Current array element being processed
currentIndex(optional) - Index of current element
array	(optional) - The full array
initialValue	(optional but recommended) - The first value for the accumulator

🧠 Extra Tip:
If you don’t provide the second argument (i.e. initialValue), the first array element (10) is used as the initial accumulator, and iteration starts from the second element (20).

If initialValue is provided (like in your code):

const numbers = [10, 20, 30];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

initialValue = 0
So:
acc = 0
First curr = numbers[0] = 10
Iteration starts from index 0

👉 It starts from index 0.
acc = 0 (from initialValue), curr = 10 (element at index 0)

❌ If initialValue is not provided:

const numbers = [10, 20, 30];
const sum = numbers.reduce((acc, curr) => acc + curr);
Now:

acc = numbers[0] = 10 (first element becomes the initial accumulator)
First curr = numbers[1] = 20

Iteration starts from index 1
👉 It starts from index 1.
acc = 10 (from array), curr = 20 (element at index 1)
*/

//  real time example

// 1 . sum of array element

const number = [10, 20, 30, 40];
const sum = number.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// acc = 0;
// acc = number[0(initial accumulator work as index)]
// acc[0] = 10;
// 0 + 10
// 10 --

// 2. product of array

let collection = [10, 20, 30];

const product = collection.reduce((acc, curr) => acc * curr, 1);
console.log(product);

// 3. flattened a 2d array

let nested = [[1, 2], [3, 4], [5]];
let array = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log(array);

// acc = []
// curr = [1,2]
// acc.concat(curr) => [1,2]
// acc = [1,2]
// curr = [3,4]
// acc.concat(curr) => [1,2,3,4]
// acc = [1,2,3,4]

/*
note
If you're working with deeply nested arrays, like [[1, 2], [3, [4, 5]], 6], this method won’t fully flatten them — you'd need recursion or flat().
*/

// 4 . max value

let numberCollection = [90, 50, 30, 100];
let result = numberCollection.reduce(
  (acc, curr) => (acc > curr ? acc : curr),
  numberCollection[1]
);
console.log(result);

/*
(acc, curr) => {
  return acc > curr ? acc : curr;
}
*/

// 5. sum of prices in cart

let cart = [
  { item: "pen", price: 10 },
  { item: "book", price: 10 },
  { item: "noteBook", price: 10 },
];

let sumOfCart = cart.reduce((sum, product) => sum + product.price, 0);
console.log(sumOfCart);
