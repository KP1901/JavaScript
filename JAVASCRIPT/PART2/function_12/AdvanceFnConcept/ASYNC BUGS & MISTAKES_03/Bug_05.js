// 5️⃣ Missing return inside .then()

function fetchData() {
  return Promise.resolve(10);
  // return Promise.reject("Network error");
}

function process(data) {
  return data * 2;
}

fetchData()
  .then((data) => {
    process(data);
    console.log(process(data));
  })
  .catch((er) => {
    console.log(er);
  });

/*
   output : undefined
   
🤯 Why this happens

-Every .then() must return something
-If you don’t return → JS returns undefined automatically
-Next .then() receives that undefined
*/

fetchData()
  .then((data) => {
    return process(data);
  })
  .then((result) => {
    console.log(result);
  });

/*
🧠 FINAL RULE (MEMORIZE THIS)

-Always return from .then()
-(or explicitly return a Promise or value).
*/
