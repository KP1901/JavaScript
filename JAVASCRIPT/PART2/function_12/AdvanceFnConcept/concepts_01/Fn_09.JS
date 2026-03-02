// STEP 0: Create a fulfilled promise with value 10

Promise.resolve(10)

  // STEP 1: First then
  .then((x) => {
    console.log("step 1");
    return x * 2;
  })

  // STEP 2: Second then
  .then((x) => {
    console.log("Step 2");
    throw new Error("Boom");
  })
  // STEP 3: Third then
  .then((x) => {
    console.log("step 3");
    return x * 2;
  })
  .catch((err) => {
    console.log("Caught : ", err.message);
  });

/*
 🧠 Final rule to remember

When an error is thrown in any .then(),
the promise chain stops and jumps directly to .catch().

✅ Final one-line answer (memorize this)

err is just a reference variable that holds the Error object.
message is just a property of the Error object.
Neither err or message is a reserved keyword.
*/
