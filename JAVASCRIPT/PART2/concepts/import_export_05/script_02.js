/*
🧠 What is import?

👉 import = “Bring something from another file into this file”

step 1 : export const a = 10;
step 2 : import { a } from "./file.js";

1.name should be same

step 1 : export const a = 10;
step 2 : import { a } from "./file.js";

 2 .rename while importing
 
 import { a as num } from "./file.js";

 3. import everything (*)

 import * as utils from "./file.js"

 👉 Usage:

utils.a
utils.sum()

📌 Real-world:

-utility files
-large modules

4.default import (very Important)

if file has : export default function greet() {}

import like this :

import greet from "./script.js"

✅ No {}
✅ You can rename anything:

import hello from "./file.js";
*/

export let ab = 10;

export default function run() {
  console.log("running");
}

/*
🔥 6. Import Only for Side Effects

import "./file.js";

👉 No variables — just run the file

📌 Real-world:

-CSS import
-global setup
-polyfills

🔥 7. Dynamic Import (Advanced 🔥)

const module = await import("./file.js");

👉 Returns promise

📌 Real-world:

-lazy loading
-performance optimization

🔥 8. Import From Folder

import { a } from "./utils/math.js";

👉 Always use relative path (./ or ../)
---------------------------------------------
*/

/*
🔹 6. REAL FLOW (Understand this deeply)

Example:

utils.js

export function formatName(name) {
  return name.toUpperCase();
}

auth.js

import { formatName } from "./utils.js";

export function login(user) {
  return formatName(user);
}

app.js

import { login } from "./auth.js";

console.log(login("kiran"));

👉 Flow:

app → auth → utils

🔥 7. COMMON BEGINNER MISTAKES

❌ Forgetting type="module"
❌ Wrong path (./)
❌ Mixing default & named import
❌ Not exporting anything
*/
