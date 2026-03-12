/*
Property Descriptor :

Every property in a JavaScript object has hidden settings that control how it behaves.
These settings are called Property Descriptors.

Example Object

const user = {
  name: "Kiran"
}

This property internally looks like:

name: {
  value: "Kiran",
  writable: true,
  enumerable: true,
  configurable: true
}

These 3 flags control property behavior.
*/

// 1.writable => controls wether value can be changed

const Person = {};

Object.defineProperty(Person, "name", {
  value: "kiran",
  writable: false,
});

Person.name = "ajit";

console.log(Person.name);

/*
Output:

Kiran

Because:

writable: false

The value cannot change.
*/

// 2.enumerable => controls wether appears in loop

const user = { name: "kaustubh" };

Object.defineProperty(user, "age", {
  value: 26,
  enumerable: false,
});

for (const key in user) {
  console.log(key);
}

// age does not appear

// 3 configurable => controls whether the property can be deleted or reconfigure

const School = { sName: "Lal Bahadur" };

Object.defineProperty(School, "since", {
  value: "1993",
  configurable: false,
});

delete School.since;

console.log(School.since);

/*

Viewing Property Descriptors

You can inspect them using:

Object.getOwnPropertyDescriptor(obj, "name")

Example:

*/

const user1 = { name: "Kiran" };

console.log(Object.getOwnPropertyDescriptor(user1, "name"));

/*
Why Property Descriptors Exist

They allow JavaScript to create controlled properties.

Example uses:

read-only properties
hidden properties
protected APIs
library internals

This is how JavaScript engine controls object behavior.


From property descriptors you should learn:

1️⃣ Objects store metadata about properties

2️⃣ You can control property behavior

-read only
-hidden
-protected

3️⃣ JavaScript classes internally use descriptors

4️⃣ Frameworks and libraries depend on this

SO IMP :

Object.getOwnPropertyNames(Object)

: shows all hidden properties of Object
*/