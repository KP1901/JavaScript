// STEP 6 : LOOPING IN MAP

let vk = new Map([
  ["name", "kiran"],
  ["age", 25],
]);

// 1️⃣ Most Preferred → for...of with destructuring

for (const [key, value] of vk) {
  console.log(key, value);
}

// 2️⃣ When you only need keys

for (const key of vk.keys()) {
  console.log(key);
}

// 3️⃣ When you only need values

for (const value of vk.values()) {
  console.log(value);
}

// 4️⃣ forEach() (less preferred)

vk.forEach((key, value) => {
  console.log(key, value);
});

/*
⚠️ Downsides

-Cannot use break
-Cannot use continue
-Harder to stop loop early

*/

/*

STEP 6 : 
 
MAP comparison :

-Map Object also compared by ref not values
-changing a property in one obj will affect it in other if it refers same like object everything

*/

let m1 = new Map();

m1.set("name", "kiran");
m1.set(1, 20);

let m2 = m1;

m2.set("name", "Ajit");
m2.set(1, 20);

console.log(m1 == m2);

m2.set("name", "Jay");

console.log(m1);
console.log(m2);

// STEP 7 :

/*
| Feature             | Object                      | Map        |
| ------------------- | --------------------------- | ---------- |
| Key types           | string / symbol             | any type   |
| Order               | not guaranteed historically | guaranteed |
| Size                | manual                      | `.size`    |
| Iteration           | harder                      | easy       |
| Performance         | slower for large data       | optimized  |
| Prototype pollution | possible                    | none       |

*/
