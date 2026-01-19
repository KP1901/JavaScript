// "use strict";

// 1 inside object method

let person = {
  name: "kiran",
  greet() {
    console.log(this.name); // krish
  },
};
person.greet();

// 2 inside regular function

function greeting() {
  console.log(this); // window
}
greeting();

// 3 inside stric mode function (regular function)
function strictFn() {
  console.log(this);
}
strictFn();

// 4. arrow function

const obj = {
  name: "kiran",
  greet: () => {
    console.log(this.name); // undefined (arrow functions don’t have their own `this`)
  },
};
obj.greet();
/*
Arrow functions do not bind their own this. They use this from the enclosing (outer) scope.
*/

const obj1 = {
  name: "krish",
  greet() {
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  },
};
obj1.greet();

// 5 . how it works

let persons = {
  name: "kiran",
  age: 26,
  info: {
    address: function getAddress() {
      console.log(this.city);
    },
    city: "udgir",
  },
};
persons.info.address();
// so here this = persons.info because it is calling to address()
// this does not point to person directly.
// It points to person.info (because that’s the caller).
// 👉 The object before the final dot (.) decides the value of this.

//
/*
 lexical this uses
-Delay execution (call it later).

-Use it in a callback (e.g., inside setTimeout, event handlers, etc.), where a normal function would lose the correct this.

*/

let user = {
  fname: "kiran",
  greet: function () {
    setTimeout(() => {
      console.log(this.fname);
    }, 2000);
  },
};
user.greet();

/*
⚖️ Conclusion

Normal arrow function: you must call it explicitly with ().

Arrow function in setTimeout: you hand it to setTimeout, and the runtime calls it later.
*/

const obj2 = {
  name: "krish",
  greet() {
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  },
};
obj2.greet();
