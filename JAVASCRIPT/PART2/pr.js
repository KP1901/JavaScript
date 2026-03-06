const clickEl = document.getElementById("btn");
function greet() {
  console.log("hi");
}
function debounce(fn, delay) {
  let timeId = 0;

  return function () {
    clearTimeout(timeId);

    timeId = setTimeout(() => {
      fn();
      console.log(delay);
    }, delay);
  };
}

let debounceFn = debounce(greet, 500);

clickEl.addEventListener("click", debounceFn);
