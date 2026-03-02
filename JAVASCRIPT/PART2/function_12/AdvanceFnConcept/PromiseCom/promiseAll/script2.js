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

Promise.all([userInfo(), orderDetails()])
  .then(([user, order]) => {
    console.log(user, order);
  })
  .catch((error) => {
    console.log(error.message);
  });
