const p_1 = document.getElementById("p_1");
p_1.innerText = "hi this new text";

const p_2 = document.querySelector("#p_2");
p_2.style.color = "red";

const p_3 = document.querySelector("#p_3");
p_3.style.backgroundColor = "red";

const list = document.querySelectorAll(".my-class");

const newNames = ["Car", "Bike", "Bus", "Train"];

list.forEach((item, index) => {
  console.log(list[index].innerText);
  console.log(item.innerText);
  //   item.innerText = newNames[index];
});

// newNames.forEach((item, index) => {
//   console.log(newNames[index]);
//   console.log(item);
// });

function changeContent() {
  const btn1 = document.getElementById("btn-1");
  btn1.innerText = "HI";
}

function getInputValue() {
  const input = document.getElementById("myInput");

  console.log(input.value);
}

function changeTitle(title) {
  document.title = title;
}
function changeImgSource() {
  const getimg = document.getElementById("img-1");
  getimg.src =
    "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?w=1200&h=630";
  getimg.alt = "hi";
}

const h2 = document.getElementById("header2");
h2.style.fontSize = "30px";

function hideElement() {
  const ch11 = document.getElementById("ch-11");
  ch11.style.display = "none";
}

function elementStatus(status) {
  const header3 = document.querySelector(".header3");
  if (status === "hide") {
    header3.style.display = "none";
  }
  if (status === "show") {
    header3.style.display = "";
  }
}

document.getElementById("btn-13").addEventListener("click", function () {
  const h13 = document.getElementById("h-13");
  h13.classList.toggle("hide");
});

const ulList = document.querySelectorAll(".ul-li");
console.log(ulList[1].innerText);

ulList.forEach((li, index) => {
  li.innerText = `$ Apple ${index + 1}`;
});

const p15 = document.querySelector(".p-15");
p15.style.fontSize = "30px";
p15.style.backgroundColor = "lightblue";
p15.style.padding = "10px 10px";
p15.style.margin = "0px";

const div16 = document.querySelector(".div-16");
div16.innerHTML = "<h1>Challenge 16</h1>";

document.getElementById("h17").addEventListener("click", function (e) {
  console.log(e.target.tagName);
});

document.body.style.backgroundColor = "lightblue";

const btn19 = document.getElementById("btn19");
btn19.addEventListener("click", () => {
  const h19class = document.querySelector(".h19");
  const h19id = document.querySelector("#h19");
  let temp = h19class.innerHTML;
  h19class.innerHTML = h19id.innerHTML;
  h19id.innerHTML = temp;
});

const ch20 = document.getElementById("ch20");

const div20 = document.createElement("div");
div20.innerHTML = "<h2>hi this dynamically created</h2>";
div20.classList.add("helloji");

ch20.appendChild(div20);
