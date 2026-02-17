const submitBtn = document.querySelector(".btn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

submitBtn.addEventListener("click", () => {
  popup.classList.add("open-popup");
});
closeBtn.addEventListener("click", () => {
  popup.classList.remove("open-popup");
});
