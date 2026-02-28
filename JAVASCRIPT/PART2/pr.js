function retry(operationFn, maxAttempts = 3) {
  return function (message) {
    let finalMessage = operationFn(message);
    if (maxAttempts <= 3) {
      maxAttempts--;
    }
  };
}

function operationFn() {
  return "success";
}

const count = retry(operationFn);
count();
