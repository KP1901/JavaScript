function retry(operationFn, maxAttempts = 3) {
  let attempts = 1; // closure variable controlled by retry

  return function (message) {
    while (attempts <= maxAttempts) {
      const result = operationFn(attempts, message);

      if (result === "success") {
        console.log(`Attempt ${attempts} correct pin`);
        return;
      } else {
        console.log(`Attempt ${attempts} wrong pin`);
        attempts++;
      }
    }

    console.log(`Failed after ${maxAttempts} attempts`);
  };
}

// operationFn now receives attempt number
function operationFn(attempt) {
  switch (attempt) {
    case 1:
      return "fail";
    case 2:
      return "fail";
    case 3:
      return "success";
    default:
      return "fail";
  }
}

const count = retry(operationFn);
count();
