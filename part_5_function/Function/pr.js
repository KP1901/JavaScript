let name = "kiran";
const person = {
  name: "Bob",
  show: () => {
    console.log(this.name);
  }.bind(this),
};
person.show();
