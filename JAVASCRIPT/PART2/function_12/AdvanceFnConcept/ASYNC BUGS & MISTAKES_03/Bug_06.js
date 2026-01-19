// 6️⃣ Unhandled Promise Rejection

async function run() {
  await Promise.reject("Error");
}
// run();

/*
❌ Result

-Console warning: Unhandled Promise Rejection
-In production → app may crash

*/

async function run() {
  try {
    await Promise.reject("Error");
  } catch (error) {
    console.log("Caught ", error);
  }
}
run();

/*
🧠 FINAL RULE (MEMORIZE THIS)

-Every rejected promise MUST be handled
-with .catch() or try...catch.

-----------------------------------------------------------------------
An async function always returns a Promise.
----------------------------------------------------------------------------------
original 

async function run() {
  try {
    await Promise.reject("Error");
  } catch (error) {
    console.log("Caught ", error);
  }
}
run();

----------------------------------------------------------------------------------

So internally, JS treats this like:

function run() {
  return Promise.reject("Error")
    .catch((error) => {
      console.log("Caught ", error);
    });
}


----------------------------------------------------------------------------------
An async function always returns a Promise.

--------------------------original-----------------------------

async function run() {
  try {
    const value = await Promise.resolve("OK");
    console.log(value);
  } catch (error) {
    console.log("Caught", error);
  }
}
run();

--------------------------behind-----------------------------
How it looks behind (Promise chain equivalent) because async returns promise what do it really mean
function run() {
  return Promise.resolve("OK")
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.log("Caught", error);
    });
}









  You don’t write that Promise — JS creates it for you.
*/
