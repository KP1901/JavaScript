const imgBox = document.querySelector(".img-box");
const imgWrap = document.querySelector(".img-wrap");
const originalImg = document.getElementById("originalImg");
const line = document.getElementById("line");

let boxWidth = 0;
let isMoving = false;

originalImg.style.width = imgBox.offsetWidth + "px";

imgBox.addEventListener("mousemove", (e) => {
  boxWidth = e.clientX - imgBox.getBoundingClientRect().left;
  console.log(boxWidth);

  isMoving = true;
});

function animate() {
  if (isMoving) {
    imgWrap.style.width = boxWidth + "px";
    line.style.left = boxWidth + "px";
  }

  requestAnimationFrame(animate);
}
animate();
