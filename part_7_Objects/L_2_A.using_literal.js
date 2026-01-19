// 1 object literal

let user = {
  name: "kiran",
  age: 25,
  greet() {
    console.log("hi");
  },
  greet: function () {},
  greet: function sayHi() {},
  greet: () => {},
};
console.log(user);
