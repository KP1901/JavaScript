function makePerson(name) {
  function getName() {
    return name;
  }

  function setName(newName) {
    name = newName;
    return name;
  }
  return { getName, setName };
}
let person = makePerson("kiran");

console.log(person.getName());
person.setName("Ajit");
console.log(person.getName());
