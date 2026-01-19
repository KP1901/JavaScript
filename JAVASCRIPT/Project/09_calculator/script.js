const display = document.getElementById("display");

let expr = "";

function updateDisplay() {
  display.textContent = expr || "0";
}

function safeEval(expression) {
  if (!/^[0-9+\-*/%.() ]*$/.test(expression)) {
    throw new Error("Invalid");
  }
  return Function(`"use strict";return (${expression})`)();
}

function handleOperator(newOp) {
  if (/[/*\-+%]$/.test(expr)) {
    expr = expr.replace(/[+\-*/%]$/, newOp);
  } else {
    expr += newOp;
  }
}

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const v = btn.dataset.val;
    if (v && !btn.classList.) {
      expr += v;
      updateDisplay();
    }
    if (btn.classList.contains("op")) {
      handleOperator(btn.dataset.val);
      updateDisplay();
    } else if (btn.classList.contains("clear")) {
      expr = "";
      updateDisplay();
    } else if (btn.classList.contains("equal")) {
      try {
        const res = safeEval(expr);
        expr = String(res);
        updateDisplay();
      } catch (e) {
        display.textContent = e.message;
        setTimeout(() => {
          display.textContent = "";
          expr = "";
        }, 800);
      }
    } else if (btn.id === "back") {
      expr = expr.slice(0, expr.length - 1);
      updateDisplay();
    }
  });
});
