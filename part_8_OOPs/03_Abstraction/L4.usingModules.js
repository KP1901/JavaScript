// implementation

// private not exported
function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}
export function calculate(operation, a, b) {
  if (operation === "add") {
    return add(a, b);
  } else if (operation === "substract") {
    // return substract(a, b);
    console.log(substract(a, b));
  } else {
    throw new Error("Invalid Operation");
  }
}
// export { calculate };
