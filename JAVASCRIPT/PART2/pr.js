// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error("failed"));
//   }, 1000);
// });

// promise
//   .then((data) => {
//     if (data !== "data received") {
//       throw new Error("data not found");
//     }
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

const fetchData = () => {
  return new Promise((resolve, reject) => {
    console.log("Fetching Data...");

    setTimeout(() => {
      const success = false;
      if (success) {
        resolve("Data received from server");
      } else {
        reject(new Error("Server Failed"));
      }
    }, 2000);
  });
};

fetchData()
  .then((data) => {
    if (data !== "Data received from server") {
      throw new Error("data is not found accordingly");
    }
    console.log("Success", data);
  })
  .catch((error) => {
    console.log(error.message);
  });

const p1 = Promise.reject("data failed");

p1.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});
