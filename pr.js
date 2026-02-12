let start = () => console.log("start");

function once(fn) {
  let result;
  let hasRun = false;
  return function () {
    if (!hasRun) {
      hasRun = true;
      result = fn();
    }
    return result;
  };
}

const fn = once(start);
console.log(fn());
console.log(fn());
