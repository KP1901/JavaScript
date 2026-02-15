const imgBox = document.querySelector(".img-box");
const imgWrap = document.querySelector(".img-wrap");
const originalImg = document.getElementById("originalImg");
const line = document.getElementById("line");

originalImg.style.width = imgBox.offsetWidth + "px";

let leftSpace = imgBox.offsetLeft;

imgBox.addEventListener("mousemove", (e) => {
  let boxWidth = e.pageX - leftSpace;
  imgWrap.style.width = boxWidth + "px";
  line.style.left = boxWidth + "px";
});
