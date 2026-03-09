/*
Rule 4 — this in Arrow Functions

Arrow functions do not create their own this.

Instead they inherit this from the surrounding scope.

Arrow function → uses outer `this`

*/

// example 1 : Arrow Function in Global Scope

const show = () => {
  console.log(this);
};
show();

/*
Output in browser:

window

Because the outer scope is global scope.
*/

// example 2 : arrow fuction in object

const person = {
  name: "ajit",

  greet: () => {
    console.log(this.name);
  },
};  
user.greet();

/*
Output:

undefined
Why?

Because arrow functions do not bind this to the object.

The this comes from the outer scope.

Here the outer scope is global.

So:

this → window
*/
