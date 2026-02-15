const scrollContainer = document.querySelector(".gallery");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

const scrollAmount = scrollContainer.offsetWidth; // dynamic width

scrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY;
});

nextBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft += scrollAmount;
});

backBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft -= scrollAmount;
});
