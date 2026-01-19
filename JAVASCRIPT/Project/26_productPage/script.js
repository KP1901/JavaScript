const selectBtns = document.querySelector(".select-btns");
const selectImg = document.querySelector("#select-img");

const collections = Array.from(selectBtns.children);
const sizes = document.querySelector(".sizes");
const sizeCollection = Array.from(sizes.children);

collections.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (index == 0) {
      selectImg.src = "./media/61fozsdujKL._SY741_.jpg";
    } else if (index == 1) {
      selectImg.src = "./media/61qOOwYhW-L._SY741_.jpg";
    } else if (index == 2) {
      selectImg.src = "./media/61ZBufYhdxL._SY741_ (1).jpg";
    } else {
      selectImg.src = "./media/51dUPzW2CyL.jpg";
    }
  });
});

sizeCollection.forEach((size) => {
  size.addEventListener("click", (e) => {
     
  });
});
