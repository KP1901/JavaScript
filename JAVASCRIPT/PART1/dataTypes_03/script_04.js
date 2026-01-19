// 1.object

let obj = {};
console.log(obj);
console.log(typeof obj);
console.log("\n");

// example

let username = {
  firstName: "hitesh",
  isLoggedIn: true,
};
console.log(username);
console.log(typeof username);
console.log("\n");

// for variable const we cant change but in object we can chagne the value but reference is const

// in case of let it allows to reassign the object

let obj2 = {
  fname: "kiran",
  score: 30,
};
// create {fname : "krian"} ..in heap memory and obj (reference pointer) in stack

// reassign allowed
// create a another obj {fname : "ajit"} ..in heap memory and another obj (reference pointer) in stack
// so both object and reference is different(obj2 and obj2) if first is not stored then it will garbage collection

obj2 = {
  fname: "ajit",
};
console.log(obj2);
console.log("\n");

// in case of const it not allows to reassign the object

const user = {
  name: "Alice",
  age: 25,
};

// ✅ Modifying properties is allowed
user.age = 30;
user.city = "New York";

console.log(user);
// Output: { name: 'Alice', age: 30, city: 'New York' }

// ❌ Reassignment is NOT allowed
//user = { name: "Bob" }; // ❌ TypeError: Assignment to constant variable.

// . => dot it is used to a access properties of object
// [] => bracket notation is used also but "string" should be mentioned
user.fname = "ajit";
user["fname"] = "kiran";

// date object

let today = new Date();
console.log(today);
console.log("\n");

// --------------Array object------
let arr = [1, 2, 3, 4];
console.log(typeof arr);
console.log(arr[1]);
