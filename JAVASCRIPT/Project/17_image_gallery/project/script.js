const scrollContainer = document.querySelector(".gallery");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

function getScrollAmount() {
  return scrollContainer.offsetWidth * 0.8;
}

// Mouse wheel horizontal scroll
scrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY;
});

nextBtn.addEventListener("click", () => {
  // scrollContainer.scrollLeft += 100;
  scrollContainer.scrollBy({
    left: getScrollAmount(),
  });
});

backBtn.addEventListener("click", () => {
  // scrollContainer.scrollLeft += 100;
  scrollContainer.scrollBy({
    left: -getScrollAmount(),
  });
});
