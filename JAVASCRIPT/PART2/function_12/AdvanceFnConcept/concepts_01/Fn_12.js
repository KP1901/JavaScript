/*

🧩 STEP 6: PROMISE COMBINATORS

Promise combinators help you handle MULTIPLE promises together.
or
When you want parallel Promise execution, we usually use Promise combinators.
Real apps rarely wait for one async task.
or
All Promise combinators execute promises in parallel,
but they behave differently in how they handle results.

1️⃣ Promise.all() (MOST USED)

📘 THEORY

Runs multiple promises in parallel and resolves when ALL succeed.

If any one fails → whole thing fails ❌
Result = array of resolved values (same order)
*/

// practical example

function fetchUser() {
  return Promise.resolve("User");
}

function fetchOrder() {
  return Promise.resolve("orders");
}

//❌ Failure case

// function fetchDetails() {
//   return Promise.reject("Failed");
// }

Promise.all([fetchUser(), fetchOrder()])
  .then(([user, order]) => {
    console.log(user, order);
  })
  .catch((err) => {
    console.log("Error " + err);
  });

/*
✅ WHEN TO USE

-Multiple API calls
-All results required
-Performance optimization

Mental model (remember this)

Promise.all = “ALL or NOTHING”
All succeed → ✅ continue
One fails → ❌ stop immediately

✅ Your sentence (fixed English + logic)

“Promise.all resolves only when all promises are fulfilled.
If any promise rejects, it rejects immediately.”

Promise.all() is:

-Parallel
-Fail-fast
-Returns first rejection reason
-Does NOT wait for others after rejection

------------------------------------------------------------------------------------------------------
*/

/*
2️⃣ Promise.allSettled()

📘 THEORY

Waits for ALL promises — success OR failure.

-Never rejects
-Gives status for each promise

*/

function getUserInfo() {
  return Promise.resolve("userInfo");
}
function getUserDetails() {
  return Promise.resolve("userDetails");
}
function getUserAge() {
  return Promise.reject("userAge");
}

Promise.allSettled([getUserDetails(), getUserInfo(), getUserAge()])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

/*
✅ WHEN TO USE

-Show partial data
-Dashboard widgets
-Logs / analytics
-You don’t want one failure to kill everything
------------------------------------------------------------------------------------------------------
*/

/*
3️⃣ Promise.race()

📘 THEORY

-First promise to settle (success OR failure) wins.
-Others are ignored.

What Promise.race needs :

Promise.race takes multiple promises and settles as soon as the FIRST promise settles —
whether it is fulfilled OR rejected.

So the answer is: YES
It does not care if the first one is success or failure.
*/

const p1 = new Promise((res) =>
  setTimeout(() => {
    res("fast success");
  }, 1000),
);
const p2 = new Promise((res) =>
  setTimeout(() => {
    res("slow success");
  }, 2000),
);

Promise.race([p1, p2])
  .then((value) => console.log("Won", value))
  .catch((err) => console.log("Error", err));

/*
✅ WHEN TO USE

-Timeouts
-Network fallback
-Performance race
------------------------------------------------------------------------------------------------------
*/

/*
4️⃣ Promise.any() (NEWER, IMPORTANT)

📘 THEORY

Resolves when FIRST promise fulfills.

   -Ignores rejections
   -Rejects only if ALL fail

*/

Promise.any([
  Promise.reject("Fail 1"),
  Promise.resolve("Success"),
  Promise.reject("Fail 2"),
])
  .then((result) => console.log(result))
  .catch((err) => {
    console.log("Error ", err);
  });

/*
4️⃣ Promise.any() (NEWER, IMPORTANT)
📘 THEORY

-Resolves when FIRST promise fulfills.
-Ignores rejections
-Rejects only if ALL fail

| Method     | Fails fast | Waits all | Use case      |
| ---------- | ---------- | --------- | ------------- |
| all        | ✅          | ❌         | all required  |
| allSettled | ❌          | ✅         | partial OK    |
| race       | ❌          | ❌         | fastest       |
| any        | ❌          | ❌         | first success |

all         → everyone must win
allSettled →  everyone reports
race        → first to finish
any         → first to succeed

*/
