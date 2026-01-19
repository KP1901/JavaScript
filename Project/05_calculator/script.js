const buttons = document.querySelectorAll("button");
const mainDisplay = document.getElementById("main-display");
const smallDisplay = document.getElementById("small-display");

let expression = "";
let preResult = "";

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    let value = e.target.dataset.value;
    let type = e.target.dataset.type;

    if (value === "clearAll" && mainDisplay.innerText != " ") {
      clearResult();
    } else if (value === "backspace" && mainDisplay.innerText != " ") {
      clearLastDigit();
    } else if (value === "toggle" && mainDisplay.innerText != " ") {
      calculateResult();
    } else if (value === "=" && mainDisplay.innerText != " ") {
      calculateResult();
    } else {
      appendValue(value);
    }
  });
});

function clearResult() {
  mainDisplay.textContent = "";
  smallDisplay.textContent = "";
  expression = "";
}
function clearLastDigit() {
  if (preResult) {
    mainDisplay.innerText = preResult;
  } else {
    let value = mainDisplay.innerText;
    let newValue = value.slice(0, value.length - 1);
    mainDisplay.innerText = newValue;
  }
}
function calculateResult() {
  let value = expression;
  smallDisplay.innerText = value;
  let result = new Function("return " + value)();
  mainDisplay.textContent = result;
  return (preResult = result);
}

function appendValue(value) {
  mainDisplay.textContent += value;
  expression += value;
}
/*
new Function("return " + value)()
=> 
- read js controller as normal text behind it works like so automatically operator precedence get applied

funtion anonyms(){
  return 3+2*4;
}
*/
