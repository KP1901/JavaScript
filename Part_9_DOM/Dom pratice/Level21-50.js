// challenge 21

const h1 = document.getElementById("h1");
h1.addEventListener("mouseover", () => {
  h1.style.color = "red";
});

h1.addEventListener("mouseout", () => {
  h1.style.color = "#000";
});

const liList = document.querySelectorAll(".liList");

liList.forEach((li, index) => {
  li.addEventListener("click", function () {
    console.log(li.textContent);
  });
});

document.getElementById("btn23").addEventListener("click", () => {
  const h23 = document.getElementById("h23");
  h23.classList.toggle("active");
});

const googlLink = document.getElementById("google");

const links = document.querySelectorAll(".link");

links.forEach((link, index) => {
  if (link.getAttribute("href").includes("google")) {
    console.log("google link");
  } else if (link.getAttribute("href").includes("youtube")) {
    console.log("youtube link");
  }
});

document.getElementById("btn23").addEventListener("click", (e) => {
  setInterval(() => {
    e.target.disabled = true;
  }, 2000);
  setTimeout(() => {
    e.target.disabled = false;
  }, 10000);
});

// 27

const btn27 = document.getElementById("btn27");

function getLink() {
  const link = document.getElementById("link27");
  let newLink = "https://www.youtube.com";
  link.setAttribute("href", newLink);
}
btn27.addEventListener("click", getLink);

// 28

const btn28 = document.querySelector("#btn28");
const btn281 = document.querySelector("#btn281");

btn28.addEventListener("click", function (e) {
  e.target.disabled = true;
});
btn281.addEventListener("click", function (e) {
  btn28.disabled = false;
});
// 30

const img30 = document.getElementById("img30");
img30.addEventListener("mouseover", function () {
  let newImg = "/BOM/10077.jpg";
  img30.setAttribute("src", newImg);
});
img30.addEventListener("mouseout", function () {
  let newImg = "/BOM/10076.jpg";
  img30.setAttribute("src", newImg);
});
// challenge 31

const body = document.getRootNode;
// window.addEventListener("keydown", function () {
//   document.body.style.backgroundColor = "red";
//   console.log("shoot");
// });
// window.addEventListener("keyup", function () {
//   this.document.body.style.backgroundColor = "white";
// });

// 31
const getTextFromInput = document.querySelector("#ch31");

const p31 = document.querySelector("#p31");
getTextFromInput.addEventListener("input", function () {
  p31.textContent = getTextFromInput.value;
});
// 33
getTextFromInput.addEventListener("focus", (e) => {
  e.target.style.border = "1px red solid";
});
// 34
const link34 = document.getElementById("a34");

link34.addEventListener("click", (e) => {
  // e.preventDefault();
});

// 35
const btn35_2 = document.getElementById("btn35_2");
const modalContainer = document.querySelector(".modal-container");
const btn35 = document.getElementById("button35");

btn35_2.addEventListener("click", function (e) {
  modalContainer.classList.remove("hide");
  // e.stopPropagation();
});

btn35.addEventListener("click", function (e) {
  modalContainer.classList.add("hide");
});

document.addEventListener("click", function () {
  setTimeout(() => {
    modalContainer.classList.add("hide");
  }, 5000);
});
// 36
let count = 0;

function countfn() {
  count++;
  console.log(count);
}
// 37
const h37 = document.getElementById("h37");
function changeHeading() {
  h37.textContent = "Bye";
}
// 38
const btn38 = document.getElementById("btn38");
btn38.addEventListener("click", function () {
  let data = btn38.getAttribute("data-user");
  data = "jhon";
  btn38.setAttribute("data-user", data);
});

// 39

const parentList = document.querySelector(".parent39");

const storeChildELements = parentList.children;
// console.log(storeChildELements);

// 40
console.log(Array.isArray(storeChildELements));

console.log(storeChildELements[0].style);
console.log(parentList.firstElementChild);
parentList.firstElementChild.style.backgroundColor = "red";
storeChildELements[2].style.backgroundColor = "yellow";
Array.from(storeChildELements).forEach((el, index) => {
  el.addEventListener("click", (e) => {
    if (e.target.tagName === "P") {
      e.target.style.backgroundColor = "lightblue";
    }
  });
});
// way 1
// parentList.addEventListener("click", function (e) {
//   if (e.target.tagName === "P") {
//     e.target.style.backgroundColor = "lightgray";
//   }
// });

// 42

// const parent42 = document.getElementById("parent42");

// const parent42childElements = parent42.children;

// Array.from(parent42childElements).forEach((el, index) => {
//   if (index % 2 == 0) {
//     el.classList.add("even");
//   } else if (index == 3) {
//     el.removeChild(h5);
//   }
//   el.classList.add("odd");
// });

const parent42 = document.querySelector("#parent42");
const h43 = document.querySelector(".h43");

parent42.removeChild(h43);

// 46
const parent46 = document.querySelector(".parent46");

const child46 = document.querySelector(".child46");

const h2 = document.createElement("h2");
h2.innerText = "Hi";

child46.replaceWith(h2);

// parent46.replaceChild(h2, child46);
// replaceChild(newElement, oldElement)

// 47

const h47 = document.querySelector(".h47");

const cloneOfH47 = h47.cloneNode(true);
cloneOfH47.classList.add("hi");
const parent48 = document.querySelector(".parent48");
parent48.appendChild(cloneOfH47);

// 48

const btn48 = document.querySelector(".btn48");
const p48 = document.querySelector(".p48");

btn48.addEventListener("click", function (e) {
  const newP = p48.cloneNode(true);
  newP.textContent = " Hi i am kiran";
  parent48.appendChild(newP);
});

// 49

const h49 = document.querySelector(".h49");

const cloneOfH49 = h49;
cloneOfH49.classList.add("hi");
const parent50 = document.querySelector(".parent50");
parent50.appendChild(cloneOfH49);

// 50

// way 1
// parent50.addEventListener("click", function (e) {
//   console.log(e.target);
// });

//way 2
let allchildren = parent50.children;
Array.from(allchildren).forEach((el) => {
  el.addEventListener("click", function (e) {
    console.log(e.target);
  });
});
