var age = 20; // global scope

// 1 functioned scoped - yes

function getAge() {
  var score = 100; // var is functioned scope
  console.log(age);
}
getAge();
// console.log(score); // cant access outside scope

// 2 blocked scoped - no (leaks)

if (true) {
  var number = 45; // var is no blocked scope
}
console.log(number);

// 3. reassign - yes

var myAge = 20;
myAge = 30;

console.log(myAge);

// 4. redeclare -yes

var myAge = 50;

// 5. hoisting (undefined - yes)

console.log(laptop);
var laptop = "Dell";
