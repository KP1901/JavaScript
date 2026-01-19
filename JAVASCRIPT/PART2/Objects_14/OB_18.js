// 1️⃣ Plain Object {} (what you’ve been using)

const obj = {
  name: "Kiran",
  age: 28,
};

/*

Characteristics

-Keys are strings or symbols
-Prototype exists (Object.prototype)
-Fast for fixed structures
-Most common in JS
*/

// 2️⃣ Map (specialized key–value structure)

const map = new Map();

map.set("name", "kiran");
map.set("age", 26);
map.set(true, "yes");
map.set(null, "yes");

console.log(map);

/*
Characteristics

-Keys can be ANY type
-No prototype pollution
-Built-in iteration order
-Better for dynamic keys


| Feature               | Object `{}`     | Map           |
| --------------------- | --------------- | ------------- |
| Key types             | string / symbol | any           |
| Order guaranteed      | ❌               | ✅             |
| Size                  | manual          | `map.size`    |
| Looping               | `Object.keys`   | `map.forEach` |
| Performance (dynamic) | ⚠️              | ✅             |
| Prototype issues      | yes             | no            |


4️⃣ Real-world use cases

✅ Use Object when:

Modeling entities (user, product)
Fixed structure
JSON data
APIs, configs

✅ Use Map when:

Dynamic keys
Keys are objects
Need guaranteed order
Frequent add/remove

*/

// 5️⃣ Example where Object FAILS

const obj1 = {};
const key = { id: 1 };

obj1[key] = "data";

console.log(obj1);

/*
Why?

Object key auto-stringified
*/

// 6️⃣ Same example with Map (WORKS)

const map1 = new Map();
const key1 = { id: 1 };

map1.set(key1, "data");
map1.set("name", "kiran");

console.log(map1);

console.log(map1.get(key1));

/*
Map {
  (reference to object key1) → "data"
}

- key1 is an object
- Map stores the OBJECT REFERENCE as the key
- "data" is the value
- Map does NOT create a key name
- Map does NOT convert the key to string
*/

/*

7️⃣ Iteration difference

Object:
for (let key in obj) {}

Map :
for (let [key, value] of map) {}


*/

for (let [key, value] of map1) {
  console.log(key, value);
}
