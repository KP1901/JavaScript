// challenge 1
const p1 = document.querySelector(".p1");

p1.textContent = "Hello";

// challenge 2
const h2 = document.querySelector(".h2");

h2.style.color = "red";

// challenge 3

const h3 = document.querySelector("#h3");

h3.style.backgroundColor = "red";

// challenge 4

const ch4 = document.querySelectorAll(".ch4");

ch4.forEach((element, index) => {
  element.textContent += index;
});

// challenge 5

const btn5 = document.getElementById("btn5");

btn5.addEventListener("click", (e) => {
  btn5.textContent = "unclick";
});

// challenge 6

const input6 = document.getElementById("input6");
const btn6 = document.getElementById("btn6");
const p6 = document.getElementById("p6");

btn6.addEventListener("click", function (e) {
  p6.textContent = input6.value;
});

// challenge 7
function changeTitle() {
  document.title = "new";
}

// challenge 8
function changeImgSrc() {
  const img8 = document.getElementById("img8");
  img8.src = "./Screenshot (220).png";
}

// challenge 9

const h9 = document.getElementById("h9");
h9.style.fontSize = "50px";

// challenge 10

const h10 = document.getElementById("h10");
h9.style.backgroundColor = "yellow";

// challenge 11
// function hideElement() {
//   const img11 = document.getElementById("img11");
//   img11.style.display = "none";
// }

// // challenge 12
// function showElement() {
//   const img11 = document.getElementById("img11");
//   img11.style.display = "inline-block";
// }

// challenge 13

// const btn11 = document.getElementById("btn11");

// addEventListener("click", function () {
//   const img11 = document.getElementById("img11");
//   img11.classList.toggle("hide");
// });

function toggleElement() {
  const img11 = document.getElementById("img11");
  img11.classList.toggle("hide");
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn11").addEventListener("click", toggleElement);
});

// challenge 15

const h15 = document.getElementById("h15");
const btn15 = document.getElementById("btn15");
btn15.addEventListener("click", function () {
  if (!h15.classList.contains("hide")) {
    h15.classList.add("hide");
  } else {
    h15.classList.remove("hide");
  }
});
