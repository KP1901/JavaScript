/*
class Feature 1 :
-Instance methods are methods that every object (instance) can use.
-They are written inside the class but outside the constructor.
*/

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello " + this.name);
  }

  showAge() {
    console.log(this.age);
  }
}

const u1 = new User("Kiran", 25);

u1.greet();
u1.showAge();

/*
Important Concept

Instance methods are shared by all objects.

They are stored in the prototype, not inside each object.

Memory structure:

User.prototype
 ├ greet()
 └ showAge()

u1
 ├ name
 └ age

u2
 ├ name
 └ age

So both objects use the same method functions.

Visual Model
      

*/
