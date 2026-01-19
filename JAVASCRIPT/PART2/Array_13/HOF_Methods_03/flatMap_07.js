// map vs flatmap

const arr1 = [1, 2];

const mapped = arr1.map((el) => [el, el * 2]);
console.log(mapped);

const arr2 = [1, 2];
const flatMapped = arr2.flatMap((el) => [el, el * 2]);
console.log(flatMapped);

// 1 . flatten nested arrry

const hotel = {
  floors: [
    { floorNumber: 1, rooms: [101, 102] },
    { floorNumber: 2, rooms: [201, 202] },
  ],
};
// map -your mind is think your are not used here [floor.rooms] still returns array
// because floor.rooms is array if you see in hotel object of arrays
let newArr = hotel.floors.map((floor) => floor.rooms);
console.log(newArr);

// flatMap
let newArr1 = hotel.floors.flatMap((floor) => floor.rooms);
console.log(newArr1);

// 2. Mapping each element to multiple values
const numbers = [1, 2, 3];
const result = numbers.flatMap((n) => [n, n * 10]);
// const result = numbers.flatMap((n) => n, n * 10);
console.log(result);

/*
4️⃣ Key takeaway
-flatMap() only takes one function as its main argument.
-You cannot pass multiple expressions as separate arguments.
-If you want multiple values from one element, return an array from the callback.

-You passed two arguments: (n) => n and n * 10.
-flatMap does not know what to do with the second argument.
-Only the first argument is treated as the callback function.
-n * 10 here is not defined in that scope, so it causes an error.

*/

// 3 Filtering while mapping

const words = ["hi", "hello", "hey"];

let vowels = words.flatMap((word) =>
  word.split("").filter((ch) => "aeiou".includes(ch))
);
console.log(vowels);

// edge cases

// 1.callback return non array (no flattening needed)

console.log([1, 2, 3].flatMap((x) => x * 2));

// 2.Empty arrays returned from callback:

// console.log([1, 2, 3].map((x) => (x % 2 === 0 ? [x] : [])));
console.log([1, 2, 3].flatMap((x) => (x % 2 === 0 ? [x] : [])));

// Flattens one level, removing the empty arrays automatically:
console.log([[1], [[2]], [[[3]]]].flatMap((x) => x));

// [1, [2], [[3]]] → deeper levels remain nested
