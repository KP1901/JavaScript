const btns = document.querySelectorAll(".btn");
const productImgEl = document.getElementById("productImg");

// const images = [
//   "../media/image1.png",
//   "../media/image2.png",
//   "../media/image3.png",
// ];

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
    productImgEl.src = btn.dataset.src;
  });
});

/*

Lesson 1 :

if we add only active class then we should first clear all the active classes before 

Lesson 2 :

our images path were stored in array so if more images add later then we should add image in array also
thats why we use data-src attribute so when we click on that button read it data-src attribute and set it to image src attribute
*/
