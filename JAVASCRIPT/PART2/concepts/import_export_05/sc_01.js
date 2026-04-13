import {
  age,
  userName,
  add,
  sub,
  user,
  Person,
  height,
  weight as W,
} from "./script_01.js";

import run, { ab } from "./script_02.js";

console.log(age);
console.log(userName);

console.log(add(30, 20));

console.log(sub(30, 20));

console.log(user);

const p1 = new Person("kiran");
console.log(p1.name);

console.log(height);

console.log(W);

console.log(ab);

run();
