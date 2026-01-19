/*
==========================================================
🔑 Polymorphism in JavaScript (Theory + Example)
==========================================================

📌 Theory:
1. "Polymorphism" means "many forms".
2. In OOP, it allows the same method name to work differently 
   depending on the object that calls it.
3. It mainly comes from **inheritance** and **method overriding**.
   - Parent class defines a method.
   - Child classes override the same method with their own behavior.
4. At runtime, JavaScript decides which method to execute 
   based on the actual object (this is called "runtime polymorphism").

✅ Why use it?
- We can write **generalized code** (one method call, one loop)
  and objects will automatically provide their specific behavior.
- Makes code scalable and easier to maintain.

==========================================================
*/

// 1️⃣ Parent Class
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

// 2️⃣ Child Classes overriding the same method
class Dog extends Animal {
  speak() {
    console.log("Dog barks 🐶");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows 🐱");
  }
}

// 3️⃣ Polymorphism in Action
// 👉 We put objects of different classes in a single array
let animals = [new Animal(), new Dog(), new Cat()];

// 4️⃣ Loop through the array
// Even though we call the same method (speak),
// each object decides how it behaves at runtime.
animals.forEach((a) => a.speak());

/*
================== OUTPUT ==================
Animal makes a sound
Dog barks 🐶
Cat meows 🐱
============================================

📌 Conclusion:
- Same method name: speak()
- Different implementations: Animal, Dog, Cat
- We don’t care what type of object it is when calling speak().
- Each object responds in its own way → THAT is polymorphism.
*/
