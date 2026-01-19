// In nested functions, this can be handled three ways — arrow function, save reference, or bind the callback.

//issure of loosing this
// const team = {
//   name: "Developer",
//   members: ["kiran", "Alex"],
//   showMember: function () {
//     this.members.forEach(function (member) {
//       console.log(`${member} is in ${this.name}`);
//     });
//   },
// };
// team.showMember();

//way - 1 sloving issue of loosing this using arrow function

// const team = {
//   name: "Developer",
//   members: ["kiran", "Alex"],
//   showMember: function () {
//     this.members.forEach((member) => {
//       console.log(`${member} is in ${this.name}`);
//     });
//   },
// };
// team.showMember();

// way - 2 sloving issue of loosing this by saving this as reference

// const team = {
//   name: "Developer",
//   members: ["kiran", "Alex"],
//   showMember: function () {
//     const self = this;
//     this.members.forEach(function (member) {
//       console.log(`${member} is in ${self.name}`);
//     });
//   },
// };
// team.showMember();

// way - 3 sloving issue of loosing this by binding this to callback

const team = {
  name: "Developer",
  members: ["kiran", "Alex"],
  showMember: function () {
    this.members.forEach(
      function (member) {
        console.log(`${member} is in ${this.name}`);
      }.bind(this)
    );
  },
};
team.showMember();

/*
const team = {
  name: "Developer",
  members: ["kiran", "Alex"],
  showMember: function () {
    this.members.forEach(
      function (member) {
        console.log(`${member} is in ${this.name}`);
      }.bind(this)
    );
  },
};
team.showMember();

/*
1️⃣ Global Lexical Environment
Global LE
---------
team → object

2️⃣ team.showMember() is called
Execution Context of showMember
showMember Execution Context
----------------------------
this → team


✔ Because it’s called as a method: team.showMember()

3️⃣ .forEach() callback + .bind(this)
IMPORTANT

This callback is a normal function, but:

function (member) { ... }.bind(this)


👉 bind(this) creates a new bound function

4️⃣ Bound Function (engine-level view)
boundCallback
 ├── [[BoundTargetFunction]] → original callback
 ├── [[BoundThis]]           → team
 └── [[BoundArguments]]      → []


⚠️ No lexical environment is created by bind()
⚠️ This is NOT a closure

5️⃣ When forEach calls the callback

For each member ("kiran", "Alex"):

Execution Context of bound callback
Callback Execution Context
--------------------------
member → "kiran" / "Alex"
this   → team   ✅ (from [[BoundThis]])

6️⃣ Variable resolution inside callback
console.log(`${member} is in ${this.name}`);


Lookup:

member → local parameter
this   → bound this (team)
name   → team.name

*/

/*

1️⃣ const team = { ... }

Creates an object

Stored in heap memory

team variable stores a reference to that object

2️⃣ Object Properties
name: "Developer"


String property

members: ["kiran", "Alex"]


Array (iterable)

Stored separately in heap

members holds a reference to that array

3️⃣ showMember: function () { ... }

A method

Normal function (NOT arrow)

Has its own this

this will be decided at call time

4️⃣ team.showMember() (IMPORTANT)
How this is set
object.method()


👉 this = object

So inside showMember:

this → team

5️⃣ this.members.forEach(...)

this.members → array

forEach:

Higher-order function

Iterates over array

Calls callback once per element

6️⃣ The callback function
function (member) {
  console.log(`${member} is in ${this.name}`);
}


Normal function

If used without bind, this would be:

undefined (strict mode)

window (non-strict)

❌ That would break this.name
*/

/*
✅ Exactly!
That function is the callback — and by doing .bind(this), you are binding it so that the callback runs with this referring to the team object instead of the global context.
*/
