/*

Object.create() is a built-in JavaScript method that creates a new object and directly sets its prototype.

Key point

-animal is not replaced or copied.
-Object.create(animal) just makes a new empty object and sets its internal    [[Prototype]]  link to point at animal not (animal.prototpe) becayse object have only proto[[Prototype]] which hidden link to another object .

*/

const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  },
};

const dog = Object.create(animal); // dog.__proto__ = animal (animal.prototype)

dog.barks = true;

console.log(dog.eats); // true (inherited from animal)
console.log(dog.barks); // true (own property)
dog.walk(); // "Animal walks"
console.log(Object.getOwnPropertyNames(dog));
console.log(Object.getOwnPropertyNames(dog.__proto__));

console.log();

// proaccdemy exmaple

let Person = {
  calAge() {
    return new Date().getFullYear() - this.birthYear;
  },
  greet() {
    return "have a nice day";
  },

  // method like constructor fun but not construction func

  init(name, birthYear, gender) {
    this.name = name;
    this.birthYear = birthYear;
    this.gender = gender;
  },
};
let jhon = Object.create(Person);
// so we are declaring manually(dynamically) properties to newly created object ({})
jhon.name = " jhon";
jhon.birthYear = 1998;
jhon.gender = 1998;
console.log(jhon);
console.log(jhon.__proto__ === Person.prototype);
console.log(jhon.__proto__ === Person);

// 2 nd way to pass properties Object.create allows 2nd argument as ananymous object {} to pass

let mark = Object.create(Person, {
  name: { value: "marks", enumerable: true },
  birthYear: { value: 1995, enumerable: true },
  gender: { value: "Female", enumerable: true },
});
console.log(mark);
console.log(mark.calAge());

let Jhony = Object.create(Person);
Jhony.init("Jhony", 1990, "male");
console.log(Jhony);
console.log(Jhony.calAge());

/**
 
-Person is an object literal, not a constructor function.
-Objects don’t have a .prototype property.
-Only functions have .prototype.
-So Person.prototype is undefined.

🔄 most Impt statmetn Correction:
👉 Functions (constructor functions, classes) have .prototype. Objects never have it. Objects only have [[Prototype]](__proto__).
 */

/*
✅ Final summary in your words:
-Functions automatically get a .prototype.
-Instances created with new get a __proto__ that links to Function.prototype.
*/
