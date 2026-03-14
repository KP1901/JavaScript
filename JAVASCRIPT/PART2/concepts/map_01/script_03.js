/*
Step 8 : Copy map object 

Important points (Object Shallow Copy):

-Level-1 properties are copied
-If a property contains an object, its reference is copied


Important points (MAp Shallow Copy):

-Entries are copied
-If value is primitive → copied
-If value is object → reference copied

*/

const map1 = new Map([
  ["a", 1],
  ["b", 2],
  ["user", { name: "kiran", age: 23 }],
]);

const map2 = new Map(map1);

map2.get("user").name = "ajit";

console.log(map1);
console.log(map2);

// STEP 9 : DEEp copy

// same three way structuredClone(),manual copy,json method

const map3 = new Map([
  ["v", 10],
  ["w", 30],
  ["user", { name: "joe" }],
]);

const map4 = structuredClone(map3);

map4.get("user").name = "Leon";

console.log(map3);
console.log(map4);

// STEP 10 : map -> Object

const m1 = new Map([
  ["aj", 10],
  ["vj", 20],
]);

const obj1 = Object.fromEntries(m1);

console.log(obj1);

// STEP 11 : Object -> map

const obj2 = {
  name: "kiran",
  age: 25,
};
const m2 = new Map(Object.entries(obj2));

console.log(m2);

//  IMP : if key is an boolean or any type except string then please dont convert to map instead create a new map itself


