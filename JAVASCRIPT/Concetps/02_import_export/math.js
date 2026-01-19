// ✅ Named export

export function add(a, b) {
  return a + b;
}

export const sub = (a, b) => a - b;

// ✅ Default export

// export default function greet(name) {
//   return `Hello ${name}`;
// }

// ✅ Mixed exports (VERY common)

export const PI = 3.14;
export default function calc(a, b) {
  return a + b;
}

// only one defualt can be used in one file
