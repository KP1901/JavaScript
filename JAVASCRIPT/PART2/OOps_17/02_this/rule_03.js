/*
Rule 3 — this in Object Method

Example:

const user = {
  name: "Kiran",

  greet() {
    console.log(this.name)
  }
}

user.greet()

Output:

Kiran

Because:

this → user

Rule:

object.method()

this = object
*/

const user = {
  name: "Kiran",

  greet() {
    console.log(this.name);
  },
};
