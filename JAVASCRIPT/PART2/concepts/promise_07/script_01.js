console.log("calling Api...");

const response = fetch("https://dummyjson.com/users/1");

// nested promise handling

response
  .then((res) => {
    let result = res.json();
    result.then((data) => {
      console.log(data);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// promise chaining concept

response
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
