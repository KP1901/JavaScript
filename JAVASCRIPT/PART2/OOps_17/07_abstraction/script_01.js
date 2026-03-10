/*
Abstraction means:

Hide complex internal implementation
Expose only the necessary interface

In simple words:

User sees WHAT the system does
User does not see HOW it works

*/
// Example :

class CoffeeMachine {
  start() {
    this.#heatWater();
    this.#brewCoffee();
    console.log("Coffee Ready");
  }

  #heatWater() {
    console.log("Heating Water");
  }

  #brewCoffee() {
    console.log("Brewing Coffee");
  }
}
const machine = new CoffeeMachine();
machine.start();

/*

Output :

Heating water
Brewing coffee
Coffee ready

The user only calls:

machine.start()

They do not see the internal steps.

Visual Model

CoffeeMachine
 ├ start()        ← public interface
 ├ #heatWater()   ← hidden logic
 └ #brewCoffee()  ← hidden logic

User only interacts with:

start()

Abstraction vs Encapsulation 

abstration => 
    -hide complex implementation 
    - show simple interface
Encapsulation =>
    -hide data and protect it

*/
