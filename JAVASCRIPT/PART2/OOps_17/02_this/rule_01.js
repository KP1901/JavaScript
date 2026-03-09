/*

Rule 1 — this in Global Scope

Example:

console.log(this)

In the browser:

this → window

Example:

var a = 10
console.log(this.a)

Output:

10

Because:

var attaches variable to window
window.a = 10

Important:

let / const do NOT attach to window


| Environment    | Global `this` |
| -------------- | ------------- |
| Browser script | `window`      |
| Browser module | `undefined`   |
| Node.js        | `{}`          |


In the Node.js environment, this at the top level refers to an empty object {}.
When we access this.a, it shows undefined.
*/

var a = 30;
console.log(this.a);
