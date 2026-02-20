const btn = document.getElementById("btn");

function greet() {
  console.log("hi");
}

function debounce(fn, delay) {
  let timeoutId = 0;

  return function () {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn();
      console.log(delay);
    }, delay);
  };
}
let debounceFn = debounce(greet, 500);

btn.addEventListener("click", debounceFn);
