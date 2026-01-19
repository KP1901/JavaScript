function validatorFactory(rule, message) {
  return function (value) {
    const isValid = rule(value);
    return {
      valid: isValid,
      message: isValid ? "Valid input ✅" : message,
    };
  };
}

// Example 1: Minimum length validator
const minLengthValidator = validatorFactory(
  (val) => val.length >= 8,
  "Password must be at least 8 characters long"
);

const minEmailValidator = validatorFactory(
  (val) => val.length >= 12,
  "Email must be at least 12 characters long"
);

console.log(minLengthValidator("abc"));

console.log(minLengthValidator("abc465464"));

console.log(minEmailValidator("n@gmail.com"));

/*
| Variable  | Declared In              | Part of Closure? | Why                          |
| --------- | ------------------------ | ---------------- | ---------------------------- |
| `rule`    | Outer scope              | ✅ Yes            | Remembered by inner function |
| `message` | Outer scope              | ✅ Yes            | Used inside inner function   |
| `isValid` | Inner scope              | ❌ No             | Created fresh per call       |
| `value`   | Inner function parameter | ❌ No             | Local argument per call      |

*/
