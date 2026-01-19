// Named import

import { add, sub } from "./math.js";

const res = add(20, 20);
console.log(res);

const res1 = sub(20, 10);
console.log(res1);

/*
-Names must match
-Curly braces required
*/

// default import

import greetFn from "./math.js";

const res3 = greetFn("kiran");
console.log(res3);

/*
-Only one default export
-Import name can be anything
*/

// mixed import

import calc, { PI } from "./math.js";

const res4 = calc(10, 40);
console.log(res4);

// 4️⃣ Import variations (IMPORTANT)

// Rename imports

import { add as sum } from "./math.js";

let r = sum(50, 50);
console.log(r);

// import everything as object

import * as obj from "./math.js";


const rl = obj.add(10, 100);
console.log(rl);

/*
| Use case              | Use                |
| --------------------- | ------------------ |
| Share many helpers    | Named exports      |
| Main functionality    | Default export     |
| Config / polyfill     | Side-effect import |
| Node old project      | CommonJS           |
| Browser / modern Node | ES Modules         |

*/
