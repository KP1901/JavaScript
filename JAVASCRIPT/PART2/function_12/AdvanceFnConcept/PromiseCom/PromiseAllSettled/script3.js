function userInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        json() {
          return Promise.resolve({ name: "kiran", age: 26 });
        },
      });
    }, 1000);
  });
}
function orderDetails() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        json() {
          return Promise.resolve({ dish: "panipuri", cost: 30 });
        },
      });
    }, 1000);
  });

  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       reject(new Error("data not found"));
  //     }, 1000);
  //   });
}

Promise.allSettled([userInfo(), orderDetails()])
  .then(([user, order]) => {
    return Promise.all([user.json(), order.json()]);
  })
  .then(([userData, orderData]) => {
    console.log(userData, orderData);
  })
  .catch((error) => {
    console.log(error.message);
  });

/*
You said:

firstly userInfo, orderDetails returns the promise which is handled firstly then data is in json so it also return the promises so it is also handled using Promise.all

✔ Correct.

There are TWO layers of promises:

Layer 1 → Fetching response objects
Layer 2 → Extracting JSON data

🔥 Why This Is Professional-Level Thinking

Because this is exactly how real fetch() works:

let [res1, res2] = await Promise.all([fetch(url1), fetch(url2)]);
let [data1, data2] = await Promise.all([res1.json(), res2.json()]);

Same pattern.
*/
