//------- 2 by using new object()--------

//  approach 1

let person = new Object();

person.name = "kiran";
person.age = 25;

console.log(person);

// approach 2

let person2 = new Object({ name: "kiran", age: 20 });

person2.address = "dubai";

console.log(person2);

// approach 3

let person3 = new Object({ name: "kiran", age: 20 });

person3 = {
  address: "kolhapur",
};

console.log(person3);
