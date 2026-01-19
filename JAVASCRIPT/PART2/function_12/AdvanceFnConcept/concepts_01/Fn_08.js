// STEP 1: A function that returns a Promise

function getUserFromServer() {
  // Promise is fulfilled successfully
  return Promise.resolve({
    name: "Kiran",
    isActive: false, // Promise is fulfilled successfully
  });
}
// STEP 2: Use the promise

getUserFromServer()
  .then((user) => {
    // This runs ONLY when promise is fulfilled
    console.log("Data Received From Server : ", user);

    // STEP 3: Business logic check
    // Data is OK, but rule fails
    if (!user.isActive) {
      throw new Error("User account is blocked");
    }
    // STEP 5: Runs only if no error is thrown
    console.log("Login successful for:", user.name);
  })
  .catch((err) => {
    // STEP 6: Handles:
    // 1) Server rejection
    // 2) Error thrown inside .then()
    console.log("Login failed:", err.message);
  });

/*
most imp

When we fetch data from the server and the promise is fulfilled, data comes into .then().
Then we check our condition (business logic).
If the data is not according to our condition, we throw an error, which converts the fulfilled promise into a rejected one, and it is handled in .catch().
If the promise itself is not fulfilled (server or network error), .catch() also handles it.
*/
