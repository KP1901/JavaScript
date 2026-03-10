class Animal {
  speak() {
    console.log("Animal Makes Sound");
  }
}
class Dog extends Animal {
  speak() {
    console.log("Dog Barking");
  }
}
class Cat extends Animal {
  speak() {
    console.log("Cat Meow");
  }
}

class Robot {
  speak() {
    console.log("Robot Speaking");
  }
}

function makeItSpeak(entity) {
  entity.speak();
}
const r = new Robot();

makeItSpeak(r);
/*

Duck typing means:
If an object behaves like something (has required methods), we treat it as that type.

Now duck typing is happening.

Why?

Because the function does NOT care about the class.

It only cares about this:

Does the object have speak() ?

4️⃣ Why It Is Called Duck Typing

Famous rule:
"If it walks like a duck and quacks like a duck, it is a duck."

Meaning:
We don't check type, we check behavior.

So in JS:
object has speak() → acceptable
*/
