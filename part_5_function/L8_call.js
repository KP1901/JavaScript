/*
🔹 1. Theory of call()
✅ Definition

call() is a method available on all functions in JavaScript (inherited from Function.prototype).

It allows you to call a function with an explicitly specified this value and arguments passed individually.

syntax -func.call(thisArg, arg1, arg2, ...);

thisArg → the value you want this to refer to inside the function.
arg1, arg2, ... → arguments passed one by one (not as an array)

✅ Why does it exist?

Normally, when you call a method like:
obj.method();

this inside method refers to obj.
But sometimes you want to:

1.Borrow a method from one object to use with another object.
2.Manually control what this should be when a function runs.
3.Call a function that expects certain this context.

That’s where call() is useful.

Difference from others:
call(thisArg, a, b, c) → Pass arguments individually.
apply(thisArg, [a, b, c]) → Pass arguments as an array.
bind(thisArg) → Returns a new function with this bound, instead of calling immediately.

*/

// 1 . borrowing method

const person = {
  fullName: function (city, country) {
    return (
      this.firstName + " " + this.lastName + " from " + city + "," + country
    );
  },
};

const user = {
  firstName: "kiran",
  lastName: "Patil",
};

// console.log(person.fullName.call(user, "Mumbai", "India"));
console.log(person.fullName("ajit", "jadhav", "mubmai", "india"));

/*
Why “temporary borrowing”?

The fullName function still belongs to person, not user.
We just borrowed it at runtime and executed it as if it was inside user.
After the call finishes, nothing changes in user or person. It’s a one-time execution.

✅ So yes, your understanding is correct:
We are borrowing person.fullName for user, and call gives us that temporary binding of this
*/

// difference of bind , call , apply

const person2 = {
  fullName: function (city, country) {
    return (
      this.firstName + " " + this.lastName + " from " + city + "," + country
    );
  },
};

const user1 = {
  firstName: "kiran",
  lastName: "Patil",
};

let boundFn = person2.fullName.call(user1, "Mumbai", "India");
console.log(boundFn); // it prints just return value
// console.log(boundFn()); // it will throw error because it just return string value not function

/*
-call runs function immediately.

-this becomes user for that one call. it

*/
