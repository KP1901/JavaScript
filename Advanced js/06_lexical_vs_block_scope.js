debugger;

const username = "anurag";
let userAge = 25;
var a = 50;

function substract() {
  const username = "ajit";
  const x = 5;
  const y = 6;
  console.log(x + y);
  console.log(username);

  function child() {
    const childName = "golu";
    console.log(childName, x);
  }
  child();
}
substract();
