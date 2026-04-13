/*

Storing Objects (Production Pattern)

In real apps we store objects.

But objects must be serialized.

Serialization
= Converting a data structure (object, array, etc.) into a string format so it can be stored or transferred.

method used JSON.stringify()

Deserialization
= Converting the serialized string back into the original data structure (object, array, etc.).

method used JSON.parse()

*/

// store

const user = {
  name: "kiran",
  age: 25,
};

localStorage.setItem("user", JSON.stringify(user));

// read

console.log(JSON.parse(localStorage.getItem("user")));
