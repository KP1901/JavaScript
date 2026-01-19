/*
🔹 What is this?

this refers to the object that is currently calling the function.

But — its value depends on how the function is called, not where it’s written.

*/

// 🧠 Step 1: Global Context

/*
outside of function or object => refers to window (browser)
outside of function or object => refers to {} (node js)
*/
console.log(this);

// 🔹 Step 2: Inside an Object Method

const user = {
  fname: "kiran",
  greet() {
    console.log("hi " + this.fname);
  },
};
user.greet();

// 🧠 this → refers to user (the object calling the method).

// 🔹 Step 3: Function Called Normally

/*
When a function is called standalone (not as an object’s method), this refers to:
-window (in browsers)
-undefined (in strict mode)
-{} (in node js)
*/
function show() {
  console.log(this);
}
show();

//  🔹 Step 4: Arrow Functions

/*
🚀 Arrow functions don’t have their own this.
They inherit this from the surrounding scope (lexical this).
*/
const person = {
  name: "Bob",
  show: () => {
    console.log(this.name);
  },
};
person.show();
/*
-✅ Fix 1: Use a Normal Function Expression
-✅ Fix 2: Use Method Shorthand (Modern & Clean)
*/

/*
🧠 Here, this doesn’t refer to person.
It refers to the outer scope (like window).

summary -The arrow function doesn’t have its own this.
So when it’s used as a method, it doesn’t bind to the object,
but instead inherits this from the outer (lexical) scope.
*/

// 🔹 Step 5: Nested Functions Problem

// Sometimes, nested functions lose their this:

const team = {
  name: "Developer",
  members: ["kiran", "Alex"],
  showMember() {
    this.members.forEach(function (member) {
      console.log(`${member} is in ${this.name}`);
    });
  },
};
team.showMember();

/*
team.showMembers();
✅ The method showMembers is called by the object team,
so inside showMembers,
👉 this = team.

That’s why you can access this.members successfully.


⚠️ Step 2: But then comes the nested function

Inside forEach, you have:
function (member) {
  console.log(`${member} is in ${this.name}`);
}
Now here’s the key:

-This inner function is not called by the team object.
-It’s just a regular callback function that forEach internally calls like a normal function (not as a method of an object).

So when forEach executes that callback,
👉 this becomes undefined (in strict mode)
or the global object (window) in non-strict mode.

Hence this.name ❌ doesn’t refer to "Developers" anymore.

disclaimer => we can fix it using callback becuase they dont have own this
they inherit from Surrounding Scope (showMember) so here this = team

summary =>arrow function is defined inside showmember scope which have this = team so it is taking from it
*/

// 🔹 Step 6: this in Event Handlers (Browser)

/*

<button id="btn">Click</button>

<script>
document.getElementById("btn").addEventListener("click", function () {
  console.log(this.id); // "btn"
});
</script>

🧠 Here, this refers to the DOM element that triggered the event.
*/


/*
conclusion

*/