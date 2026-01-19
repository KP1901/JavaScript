// 1. band
// 👍 bind is one of the most important concepts in JavaScript when dealing with this.

/*
1) Understand the problem: how this gets lost
Rule: in JS, this depends on how a function is called.
Failing example (setTimeout loses this)

*/
const obj = {
  name: "krish",
  greet() {
    console.log(this.name);
  },
};
setTimeout(obj.greet, 1000);
// setTimeout calls greet later without the object → this is not obj.
// settimout doesnot know object is calling greet() because we are storing a refrenece
// setTimeout (and similar functions like setInterval) don’t “remember” the object the method came from. They just keep a reference to the function and call it normally.

setTimeout(obj.greet.bind(obj), 1000);

// so this is option to bind this to object which is calling (lock this to obj)
/*
What happened:
-obj.greet.bind(obj) creates a new function.
-That new function has this permanently set to obj.
-setTimeout calls the bound function later → this stays correct.
*/

/*
2) Alternative to .bind(): arrow functions (lexical this)
Inside a method, use an arrow function to capture surrounding this:
*/
const obj2 = {
  name: "kiran",
  greet() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};
obj2.greet();

/*
🔹 4. Rule of thumb (When to prefer which)
✅ Arrow function → Best inside methods when writing inline/nested callbacks.
(Because they automatically capture the surrounding this.)
✅ .bind() → Best when:
-You already have a standalone function defined elsewhere.
-You want to reuse the same function but attach it to a specific object.
*/

// 3) Method extraction (common trap) → bind it

const person = {
  name: "ajit",
  say() {
    console.log(this.name);
  },
};
person.say();

// ----------------vs------------
const person1 = {
  name: "pollard",
  say() {
    console.log(this.name);
  },
};

// const f = person1.say; // ❌ loses person

/*
3. looses person Why this happens
Functions in JavaScript are first-class values.
When stored in a variable, they lose connection to the object they came from.
The binding of this only happens at the moment of the call, not at assignment.
*/

// f(); // undefined
// so here need to bind this to object

const f = person1.say.bind(person1);
f();

// imp - arrow functions ignore .bind, .call, and .apply because they already capture this lexically when defined.

// difference of bind , call , apply

const person2 = {
  fullName: function (city, country) {
    return (
      this.firstName + " " + this.lastName + " from " + city + "," + country
    );
  },
};

const user1 = {
  firstName: "kiran",
  lastName: "Patil",
};

let boundFn = person2.fullName.bind(user1, "Mumbai", "India");
console.log(boundFn); // it prints just reference
console.log(boundFn());

/*
-bind does not run the function immediately.

-Instead, it creates a new function (boundFn) with this = user and arguments "Mumbai", "India" already locked in.

-You can call boundFn() whenever you want, even multiple times because we are storing the function .
*/