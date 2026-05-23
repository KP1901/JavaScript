// difference of realine-sync vs realine

// readline-sync

// const readLineSync = require("readline-sync");

// setInterval(() => {
//   console.log("Timer ticks");
// }, 2000);

// let name = readLineSync.question("yes or no(type y/n) : ");
// console.log(`hello ${name}`);

// readline

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

setInterval(() => {
  console.log("timer is ticking \n");
}, 2000);

rl.question("Enter your name ", (name) => {
  console.log(`Hello ${name}`);
  rl.close();
});

// prompt-sync

// const prompt = require("prompt-sync")({ sigint: true });

// setInterval(() => {
//   console.log("time is ticking");
// }, 2000);

// let userInput = prompt("enter the name");
// console.log(userInput);
