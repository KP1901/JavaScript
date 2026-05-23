// enumerable

let person = {
  name: "ajit",
  age: 20,
};

// non enumerable - adding in person

Object.defineProperty(person, "height", { value: "175cm", enumerable: false });

/*

Object.defineProperty(obj, propertyName, descriptor);

-obj → The object you want to modify.
-propertyName → The property you want to add/change.
-descriptor → An object that describes how the property behaves.

*/

for (let key in person) {
  console.log(key);
}
console.log(Object.keys(person));
console.log(Object.getOwnPropertyNames(person)); // to check non enumerator property
