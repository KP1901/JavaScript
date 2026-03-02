function userInfo() {
  return Promise.resolve({ name: "kiran", age: 26 });
}
function orderDetails() {
  // return Promise.resolve({ dish: "panipuri", cost: 30 });
  return Promise.reject(new Error("data not found"));
}

Promise.all([userInfo(), orderDetails()])
  .then(([user, order]) => {
    console.log(user, order);
  })
  .catch((error) => {
    console.log(error.message);
  });

/*
⚡ Key Rules You Must Remember

Promise.all() runs promises in parallel.

If ALL resolve → .then() runs.

If ANY reject → .catch() runs immediately.

It returns first rejection reason.

It does not collect multiple errors.

*/
