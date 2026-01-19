// 🔸 8. Optional Chaining Operator (?.)
// -------------------------------------
let user = {
  address: {
    city: "Delhi",
  },
};

console.log(user?.contact?.phone); // undefined (safe access)

/*
What is optional chaining (?.)

“If the value on the left exists (not null / undefined), then continue.
Otherwise, stop and return undefined.”

First part :
user?.contact :
-If user exists → check contact
-If user is null / undefined → stop → undefined

Second part :
?.phone
-If contact exists → read phone
-If contact is null / undefined → stop → undefined

Without ?.
user.contact.phone   // ❌ ERROR

Because:

user.contact → undefined
undefined.phone → crash


One-line meaning 🧠

👉 ?. = “Check first, then access. If missing, stop safely.”
*/

// -------------------------------------------------------------------------------------------

// Example data
let userInfo = {
  profile: {
    name: "Kiran",
  },
  login() {
    console.log("Logged in");
  },
};

let arr = [10, 20];

// 1️⃣ Object optional chaining
console.log(userInfo?.profile?.name); // "Kiran"
console.log(userInfo?.address?.city); // undefined (safe)

// 2️⃣ Function optional chaining
userInfo.logout?.(); // does nothing (safe)
userInfo.login?.();

// -------------------------------------------------------------------------------------------
