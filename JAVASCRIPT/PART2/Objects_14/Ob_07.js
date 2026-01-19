// STEP 8: Nested Objects & Safe Access (?.)

// This step prevents runtime crashes — very important in real apps.

// 1️⃣ Nested object (object inside object)

const user = {
  name: "Kiran",
  address: {
    city: "Pune",
    pin: 411001,
    company: {
      location: "Udgir",
      contact: function () {
        console.log(74930);
      },
    },
  },
};

// normally => but if address doesnot exists then it will through error 💥 App crashes.

console.log(user.address.city);

// optional chaining => if address exist then check city , if address doesn't exist return undefined

console.log(user.address?.city);

//  deep optional chaining

console.log(user.address?.company?.location);

// with function

user.address?.company?.contact?.();

// Combine with nullish coalescing (??)

let result = user?.address?.city ?? "Not available";

// with array

const userInfo = {
  skills: ["JS", "HTML"],
};

let skill = userInfo?.skills?.[0] ?? "not available";
console.log(skill);

/*
function => function is an standalone block of code where we call independently 
methods = methods is an function inside which is property of an object and calling is depend on object
*/
