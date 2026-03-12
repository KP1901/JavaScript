/*
What You Should Take From Design Patterns

1️⃣ How to Structure Code

Design patterns teach you how to organize objects and responsibilities.

Example idea:

Don't put everything in one object.
Split responsibilities.

Example:

Instead of:

const user = {
  login(){},
  logout(){},
  sendEmail(){},
  saveDatabase(){},
  validatePassword(){}
}

Patterns teach you to separate responsibilities.

2️⃣ Loose Coupling

One of the biggest lessons from design patterns is:

Objects should not depend too tightly on each other.

Bad design:

Dog → Animal → Mammal → LivingThing

Too tightly connected.

Better design:

Dog = eatBehavior + walkBehavior + barkBehavior

This is composition pattern.

3️⃣ Reusability

Patterns show how to write reusable code.

Example:

Instead of rewriting object creation everywhere:

const dog = { name: "dog" }
const cat = { name: "cat" }

Use a Factory Pattern:

function createAnimal(name){
  return { name }
}

Reusable.

*/