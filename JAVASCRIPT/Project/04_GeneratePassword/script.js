const inputEl = document.getElementById("password");
const messageEl = document.getElementById("message");
const imgBtnEl = document.getElementById("imgBtn");

function generatePass(length = 12) {
  try {
    if (length < 4) {
      throw new Error("Password must be at least 4");
    }
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let results = "!@#$%^&*()_-|][';/<>";

    let all = upper + lower + numbers + symbols;

    let result = [];

    result.push(upper[Math.floor(Math.random() * upper.length)]);
    result.push(lower[Math.floor(Math.random() * lower.length)]);
    result.push(numbers[Math.floor(Math.random() * numbers.length)]);
    result.push(symbols[Math.floor(Math.random() * symbols.length)]);

    while (result.length < length) {
      result.push(all[Math.floor(Math.random() * all.length)]);
    }

    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    messageEl.textContent = "";
    inputEl.value = result.join("");
  } catch (error) {
    messageEl.textContent = error.message;
  }
}
imgBtnEl.addEventListener("click", function () {
  if (inputEl.value) {
    navigator.clipboard.writeText(inputEl.value);
  }
});

