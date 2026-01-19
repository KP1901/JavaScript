function loadUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        name: "kiran",
        gmail: "kiranpatodekar@gmail.com",
        accountType: "Permanent",
      });
    }, 1000);
  });
}

function memoizationFn(fn) {
  let cache = {};

  return async function (id) {
    if (id in cache) {
      console.log("from Cache");

      return cache[id];
    }

    console.log("from Api");

    let result = fn(id);
    cache[id] = result;
    result.then((data) => {
      console.log(data);
    });
    return result;
  };
}

async function fetchData(id) {
  const userInfo = await loadUser(id);
  return userInfo;
}

const getUserInfo = memoizationFn(fetchData);
getUserInfo(1);
getUserInfo(2);
getUserInfo(2);

/*

1. “So loadUser returns a Promise because data is fetched after 1 second.
   Promise means: I want the value when it is ready.”

2. “A Promise means data will be ready in the future.”

3.Yes — we never use setTimeout for real data fetching.
  setTimeout is only used to simulate delay while learning.

4.“await stops the execution of that function until the data is ready.”

5.Correct statement (lock this 🔒)
  -await stops ONLY the current function,
  -NOT other code,
  -NOT JavaScript,
  -NOT the app.

5.so in real world we fetch a data and fetch itself returns a promises means (once value will be ready) will return data till awaits makes stop execution for that function.

6.“Whenever we fetch data, it returns a Promise.
To get the value from that Promise, we use await, which pauses the current function.
To use await, the function must be marked async.”

7.if we dont use await “It returns a pending Promise because data is not ready yet.
The Promise will be fulfilled later, even if we don’t await it.”

8.“We will get the data, but not immediately.
That’s why we use await.”

9.“First we get a pending Promise.
When the data becomes ready, the Promise becomes fulfilled.”

10.2️⃣ Makes the function always return a Promise ❗
(this is the hidden but important part)

11.async function f() {
  return 10;
}
 imp Force the function to return a Promise

  function f() {
  return Promise.resolve(10);
}

12.An async function automatically does Promise.resolve(returnValue) so every async function returns promises
Use await to consume data thats why used for just fetching api,
not to manage or store Promises.

*/
