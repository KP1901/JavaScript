// const user = {
//   name: "Kiran",
//   greet: () => {
//     console.log(this.name);
//   },
// };
// user.greet();

const user = {
  name: "Kiran",
  greet: function () {
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  },
};
user.greet();

/*
Arrow functions borrow this from the surrounding scope
This is called lexical this

Arrow functions use lexical this because they do not have their own this.
Instead, they take this from their surrounding (lexical) scope.

JavaScript decides the value of this for an arrow function based on where it is defined, not how or who calls it.

If an arrow function is defined inside a normal function or method, it inherits this from that function.

If an arrow function is defined directly inside an object literal, it does not get this from the object; it looks outside the object.
In strict mode, this becomes undefined (otherwise it refers to the global object).
*/
