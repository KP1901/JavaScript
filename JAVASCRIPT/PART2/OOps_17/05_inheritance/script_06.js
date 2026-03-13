/*

1️⃣ [[Prototype]]

-It is the internal hidden property of every JavaScript object.
-Defined in the JavaScript specification.
-It stores the link to the object's parent prototype.
-You cannot access it directly in code.

Example conceptually:

obj.[[Prototype]] → ParentPrototype

2️⃣ __proto__

-It is a getter/setter property used to access or modify [[Prototype]].
-Provided for developers (mainly for debugging).
-Not recommended for production code.

Example:

obj.__proto__

returns the object's [[Prototype]].

3️⃣ Recommended Way

Instead of __proto__, use:

Object.getPrototypeOf(obj)
Object.setPrototypeOf(obj, parent)

4️⃣ Simple Relationship

obj.__proto__  →  accesses  →  obj.[[Prototype]]

✅ One-line summary

[[Prototype]] is the internal prototype link, while __proto__ is the public accessor used to read or change that [[Prototype]].
*/
