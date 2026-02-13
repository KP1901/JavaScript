// lesson 1 : it wrap automatically in promise

// defining the async fn and returning the promise
async function searchImage() {
  return 10;
}

// calling async function
console.log(searchImage());

/*
async function searchImage(){
  return Promise.resolve(10)
}
*/

// resolving return promise

searchImage().then((res) => {
  console.log(res);
});

/*
In this case, async is used so that we can use await inside the function. We are not interested in the Promise returned by test().
*/

async function test() {
  let value = await searchImage();
  console.log(value);
}
test();

/*
When we return something from an async function, it automatically becomes a Promise. If we want to access its resolved value, we need to use .then() or await. To resolve a returned Promise, we only need .then() or await, not async.
*/
