const imgBox = document.querySelector(".img-box");
const imgWrap = document.querySelector(".img-wrap");
const originalImg = document.getElementById("originalImg");

originalImg.style.width = imgBox.offsetWidth + "px";
let leftSpace = imgBox.offsetLeft;

imgBox.addEventListener("mousemove", (e) => {
  let boxWidth = e.pageX - leftSpace + "px";
  imgWrap.style.width = boxWidth;
});
