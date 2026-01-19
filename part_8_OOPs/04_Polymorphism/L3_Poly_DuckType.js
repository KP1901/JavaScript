/*
==========================================================
🔑 Polymorphism in JavaScript – Function + Duck Typing
==========================================================

📌 Theory:
1. Polymorphism means "many forms":
   - Same method name → different behaviors depending on the object.
2. In JavaScript, functions don’t care about "types" (unlike Java/C#).
   - If an object has the expected method, it will work.
   - This is called **Duck Typing**:
       "If it walks like a duck and quacks like a duck, it’s a duck."
3. Example here:
   - Function `makeItSpeak` only calls `.speak()`.
   - It doesn’t care if the object is `Dog`, `Cat`, or `Robot`.
   - Each object has its own `.speak()` implementation.
4. This is **runtime polymorphism** + **flexibility of duck typing**.

==========================================================
*/

// 1️⃣ Parent Animal class
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

// 2️⃣ Dog and Cat override speak()
class Dog extends Animal {
  speak() {
    console.log("🐶 Dog barks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("🐱 Cat meows");
  }
}

// 3️⃣ A completely different class (NOT an Animal)
class Robot {
  speak() {
    console.log("🤖 Robot speaking");
  }
}

// 4️⃣ A generic function that doesn’t care about class/type
function makeItSpeak(obj) {
  // As long as obj has a .speak() method, this will work
  // if (obj instanceof Animal) obj.speak();
  obj.speak();
}

// 5️⃣ Test calls
makeItSpeak(new Dog()); // 🐶 Dog barks
makeItSpeak(new Cat()); // 🐱 Cat meows
makeItSpeak(new Robot()); // 🤖 Robot speaking
makeItSpeak(new Animal()); // animal making sound
/*
================== OUTPUT ==================
🐶 Dog barks
🐱 Cat meows
🤖 Robot speaking
============================================

📌 Conclusion:
- `makeItSpeak()` shows polymorphism: one function works with many object types.
- It doesn’t care about inheritance or type checking.
- As long as the object provides `.speak()`, it works → **Duck Typing**.
- This makes JavaScript very flexible:
    - Functions depend on "behavior" (methods), not strict types.
*/
