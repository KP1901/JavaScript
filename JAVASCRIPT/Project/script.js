const text = document.getElementById("text");
const button = document.getElementById("btn");

let count = 0;

button.addEventListener("click", () => {
  count++;
  if (count == 5) {
    button.disabled = true;
    alert("reached Limit");
  }
  text.textContent = count;
});
