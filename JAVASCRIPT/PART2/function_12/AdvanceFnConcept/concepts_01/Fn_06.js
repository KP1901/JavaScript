/*

🧩 STEP 2: CALLBACK FUNCTIONS

(First real async mechanism in JS)

1️⃣ THEORY: What is a callback?

A callback is a function passed as an argument to be executed later.

Key word: later ⏳

Because async work finishes later, JS needs a way to say:

“When you’re done, call THIS function.”

That function = callback.


2️⃣ Why callbacks exist (THEORY)

JS starts async work:

-timer
-API call
-file read

But result comes in the future.

So JS says:

“I can’t return the value now. Give me a function to call later.”
*/

// 🧪 Practical example 1: setTimeout (callback)

console.log("Start");

setTimeout(function callback() {
  console.log("Timer finished");
}, 1000);

console.log("End");

// 📌 callback runs after async task finishes.

/*

3️⃣ Callback is NOT executed immediately (IMPORTANT)
setTimeout(callback, 1000);


❌ You are NOT calling it
❌ You are giving control to JS

JS will call it later.

4️⃣ Callback = First-class function (connection 🔗)

Why can we do this?

setTimeout(() => {}, 1000);

Because:

-functions are values
-functions can be passed

📌 This depends on first-class functions.
*/

// Practical example 2: Fake async task

function fetchData(callback) {
  setTimeout(() => {
    callback("DATA RECEIVED");
  }, 1000);
}

fetchData(function (data) {
  console.log(data);
});

/*
Flow:
1️⃣ fetchData starts
2️⃣ JS continues
3️⃣ after 1s → callback runs
*/

/*

“Callback hell happens when, after user login is ready,
we pass another callback to get the user profile,
then inside that another callback to get orders,
and so on… creating deeply nested callbacks.”



5️⃣ Why callbacks become a problem (THEORY)
Callback Hell 😵
login(user, () => {
  getProfile(() => {
    getOrders(() => {
      makePayment(() => {
        // 😭
      });
    });
  });
});


Problems:

-Hard to read
-Hard to debug
-Error handling messy

This pain → thats why Promises were invented

🔑 Key takeaway

Callbacks solve async timing, but they don’t scale well.because of callback hell

real world example

login(user, function (err, userData) {
  if (err) return handleError(err);

  getProfile(userData.id, function (err, profile) {
    if (err) return handleError(err);

    getOrders(profile.id, function (err, orders) {
      if (err) return handleError(err);

      makePayment(orders, function (err, payment) {
        if (err) return handleError(err);

        console.log("Payment success");
      });
    });
  });
});

*/

// user defined

function doLater(cb) {
  setTimeout(() => {
    cb(); // YOU are calling it later
  }, 1000);
}

doLater(() => {
  console.log("callback");
});

/*
The REAL rule (lock this 🔒)

A callback is a function you give to someone else
so they can call it later, not immediately.
*/
