let person = {
  greet() {
    return `${this.fname}`;
  },
};
let user = {
  fname: "kiran",
};
console.log(person.greet());
