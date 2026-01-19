// dialog boxes

// alert()
alert("Welcome");

// confirm()

let age = 20;
let askUser = confirm("do you want to change this age");

if (askUser) {
  age = 30;
}

console.log(age);

// prompt()

let score = prompt("enter score");
console.log(score);
