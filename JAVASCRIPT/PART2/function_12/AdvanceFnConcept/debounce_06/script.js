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

// ----------------------------

const inputEl = document.getElementById("inputEl");
const btn2 = document.getElementById("btn2");

async function loadData() {
  try {
    let key = inputEl.value;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${key}`,
    );

    if (!response.ok) {
      throw new Error("HTTP ERror" + response.status);
    }
    let data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

function debounce(fn, delay) {
  let timerID = 0;
  return function () {
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      fn();
    }, delay);
  };
}

let loadDebounce = debounce(loadData, 1000);

inputEl.addEventListener("input", (e) => {
  e.preventDefault();
  loadDebounce();
});
