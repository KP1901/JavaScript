class Human {
  run() {
    console.log("Human is running");
  }
}

class Dog {
  run() {
    console.log("Dog is running");
  }
}

class Car {
  drive() {
    console.log("Car is driving");
  }
}

const human = new Human();
const dog = new Dog();
const car = new Car();

function startRunning(obj) {
  if (typeof obj.run === "function") {
    obj.run();
  } else {
    console.log("This Object cant run");
  }
}
startRunning(human);
startRunning(dog);
startRunning(car);
/*

Duck typing means:

If an object has the required methods, JavaScript will use it, even if it is not the expected class/type.

Duck typing happens inside a function

Why?

Because the function does NOT care about the class/type.

It only cares about this:

Does the object have speak() ?

4️⃣ Why It Is Called Duck Typing

Duck Typing

makeSpeak(r);

A function accepts different object types based on behavior.

Famous rule:
"If it walks like a duck and quacks like a duck, it is a duck."

Meaning:
We don't check type, we check behavior.

So in JS:
object has speak() → acceptable
*/
