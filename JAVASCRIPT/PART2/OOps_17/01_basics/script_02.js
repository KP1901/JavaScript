/*

Q1 question 1 :

const car = {
  brand: "BMW",

  show() {
    console.log(this.brand)
  }
}

const showBrand = car.show

showBrand()

Step-by-Step Execution

Step 1 — Object Creation

const car = {
  brand: "BMW",
  show() { ... }
}

Here:

car.show → function

Step 2 — Reference Copy

const showBrand = car.show

Now:

showBrand → just a function reference

Important:

showBrand is NOT connected to car anymore

So now internally it becomes like:

function show() {
  console.log(this.brand)
}

Step 3 — Function Call
showBrand()

This is a normal function call, not an object method call.

So:

this = global object (window in browser)

Final Output:
undefined

Because:
window.brand → undefined

Q2 : question 2

const user = {
  name: "Kiran",

  greet() {
    console.log(this.name)
  }
}

setTimeout(user.greet, 1000)

Step-by-Step What Happens

1️⃣ Object is created
user
 ├─ name → "Kiran"
 └─ greet → function

 2️⃣ Function reference is passed

setTimeout(user.greet, 1000)

This does NOT pass the object method call.

So internally it becomes something like:

const fn = user.greet
setTimeout(fn, 1000)

3️⃣ After 1 second JS executes it

JS runs:

fn()

This is a normal function call, not:

user.greet()

Final Result :
console.log(this.name);

Becomes:
window.name

Which is:
undefined

----------------------------------------------------------

| Location             | `this` value |
| -------------------- | ------------ |
| Global scope         | `window`     |
| Normal function call | `window`     |
| Strict mode function | `undefined`  |
| Object method        | the object   |

*/

const car = {
  brand: "BMW",

  call() {
    return this.brand;
  },
};

const fn = car.call;

// console.log(fn());
console.log(fn.bind(car)());

const person = {
  name: "ajit",

  details() {
    console.log(this.name);
  },
};

// setTimeout(person.details, 1000);
setTimeout(person.details.bind(person), 1000);
