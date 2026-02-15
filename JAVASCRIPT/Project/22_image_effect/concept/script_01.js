/*
🔹 Example
<div id="box"></div>

#box {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 30px;
}

const box = document.getElementById("box");
console.log(box.offsetWidth);

Result:
200 (content)
+ 40 (padding: 20 left + 20 right)
+ 10 (border: 5 left + 5 right)
-----------------
= 250px

*/