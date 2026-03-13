/*
class Feature 2 :static method 

Static methods belong to the class itself, not to the objects created from the class.

*/

class MathHelper {
  static add(a, b) {
    return a + b;
  }
}
// console.log(MathHelper.add(2, 3));

class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }

  static info() {
    console.log(this.name);
  }
}

const u1 = new User("Kiran");

u1.greet();
User.info();
User.info.call(u1);

/*
Notice:

MathHelper.add()

-We are calling it on the class, not on an object.
-if we call static methods on object it will show error
-static methods are stored itself in class not in prototype

Rule Summary
instance method → called on object
static method → called on class
*/
