// const obj1 = [
//   { key: "sample 1", data: "Data1" },
//   { key: "sample 1", data: "Data1" },
//   { key: "sample 2", data: "Data2" },
//   { key: "sample 1", data: "Data1" },
//   { key: "sample 3", data: "Data1" },
//   { key: "sample 4", data: "Data1" },
// ];

// let output = {};

// obj1.forEach((item) => {
//   if (output[item.key]) {
//     output[item.key].push(item);
//   } else {
//     output[item.key] = [item];
//   }
// });

// console.log(output);
// ----------------------------------

const add = (a, b) => a + b;

function memoizOne(fn) {
  let cache = {};

  return function name(a, b) {
    const result = fn(a, b);
    console.log(result);
  };
}

const memoizedData = memoizOne(add);

memoizedData(1, 2);
memoizedData(1, 2);
