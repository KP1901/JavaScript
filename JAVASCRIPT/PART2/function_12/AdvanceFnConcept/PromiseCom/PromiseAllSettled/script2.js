function userInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "kiran", age: 26 });
    }, 1000);
  });
}
function orderDetails() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({ dish: "panipuri", cost: 30 });
  //     }, 1000);
  //   });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("data not found"));
    }, 1000);
  });
}

Promise.allSettled([userInfo(), orderDetails()])
  .then((results) => {
    results.forEach((result,index) => {
      if (result.status === "fulfilled") {
        console.log(`Promise ${index} Success:`, result.value);
      } else {
        console.error(`Promise ${index} Failed:`, result.reason.message);
      }
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

/*
After 1 second, this is what .then() receives:
[
  {
    status: "fulfilled",
    value: { name: "kiran", age: 26 }
  },
  {
    status: "rejected",
    reason: Error("data not found")
  }
]

*/
