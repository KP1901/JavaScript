// STEP 10: this — Common Pitfalls & Rules (CRITICAL)

/*
1️⃣ Rule #1 (LOCK THIS)

this depends on HOW a function is called, not where it’s written
*/

// 2️⃣ this inside object method ✅

const user = {
  name: "Lucky",
  score: 40,
  greet() {
    console.log(this.name);
  },
};
// user.greet();

/*
✔️ Called using user.
✔️ this → user
*/

// 3️⃣ Method assigned to variable ❌

const greetFn = user.greet();
// greetFn();

/*
- greet is a normal object method
- user.greet() CALLS the function immediately
- call style is object.method(), so this === user

- greet() executes and prints this.name
- greet() has no return statement
- therefore greet() returns undefined

- greetFn now stores undefined
- calling greetFn() means calling undefined()
- ❌ TypeError
*/

// 4️⃣ Arrow functions DO NOT have their own this ⚠️

const adhar = {
  name: "Lucky",
  address: "udgir",
  greet: () => {
    console.log(this.name);
  },
};
// adhar.greet();

/*
- Arrow function is defined inside the object literal
- Object literals do NOT create a scope
- Arrow functions take `this` from the surrounding scope
- Surrounding scope is global scope
- In browser, global `this === window`
- window.name is undefined
*/

const aadhar = {
  name: "Lucky",
  address: "udgir",
  greet() {
    () => {
      console.log(this.name);
    };
  },
};
// aadhar.greet();

/*
- greet() is a normal method
- greet() is called as aadhar.greet()
- so inside greet(), this === aadhar

- Arrow function is CREATED inside greet()
- Arrow functions do not have their own this
- Arrow captures this from greet()
- So arrow’s this === aadhar

- Arrow is never called, so console.log never runs
- window is NEVER used here

imp If you write a function inside another function and never call it, it will NEVER run.
-()=>{} here just a arrow fucntion not callback

🔑 Core definition (very important)

A function is a callback ONLY if it is PASSED to someone else
and that someone else CALLS it.
*/

/*

-📌 Arrow takes this from outside scope (nearest function), not the object.
-👉 Never use arrow for object methods (most cases).
*/

// 5️⃣ Fix using normal function

const user1 = {
  name: "Kiran",
  greet() {
    console.log(this.name);
  },
};
// user1.greet();

// 6️⃣ this inside callback (classic bug)

const userProfile1 = {
  name: "Kiran",
  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  },
};
userProfile1.greet();

/*
- greet() is a normal object method
- called as userProfile1.greet()
- so inside greet(), this === userProfile1

- setTimeout registers a callback
- the callback is a NORMAL function
- normal functions get `this` from how they are called
- callback is called without an object
- so `this` is window (non-strict) or undefined (strict)

- therefore this.name === undefined
*/

// 7️⃣ Fix using arrow inside callback ✅

const userProfile = {
  name: "Kiran",
  greet() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

// userProfile.greet();

/*
- greet() is a normal object method
- Called as userProfile.greet()
- So inside greet(), this === userProfile

- setTimeout registers a callback
- Arrow function is created inside greet()
- Arrow functions do not have their own this
- Arrow captures this from greet() → userProfile

- After ~1 second, the event loop executes the callback
- console.log(this.name) → "Kiran"
*/

// challenge - find answer

const obj = {
  value: 10,
  show() {
    return this.value;
  },
};

const fn = obj.show();
console.log(fn());

/* 
1 : Problem :

const fn = obj.show;

so it looks like :

const fn = function (){
  return this.value;
}

-so function will detach from object 


2: const fn = obj.show();


- show is a normal object method
- it is CALLED immediately by obj.show()
- call style is object.method(), so this === obj
- show() returns this.value → 10
- fn now stores the VALUE 10
- calling fn() means calling 10(), which causes a TypeError



*/
