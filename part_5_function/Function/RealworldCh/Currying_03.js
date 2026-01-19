// 🧠 Challenge 1 — “Email Template Builder”

function createEmail(to) {
  return function (subject) {
    return function (body) {
      return {
        to: to,
        subject: subject,
        body: body,
      };
    };
  };
}

let email = createEmail("user@example.com")("Welcome to Our App")(
  "Thanks for signing up!"
);
console.log(email);

// ⚙️ Challenge 2 — “Unit Converter”

function convertUnit(fromUnit) {
  return function (toUnit) {
    return function (value) {
      let result;
      if (fromUnit === "m" && toUnit === "km") {
        result = value / 1000;
      } else if (fromUnit === "F" && toUnit === "C") {
        result = (((value - 32) * 5) / 9).toFixed(2);
      }
      console.log(`${value} ${fromUnit} = ${result} ${toUnit}`);
      return result;
    };
  };
}
const mtokm = convertUnit("m")("km");
mtokm(100);

const ftoc = convertUnit("F")("C");
ftoc(100);

/*
That is currying because:

You intentionally designed the function as nested single-argument functions.

But when you do this:

const mtokm = convertUnit("m")("km");
mtokm(100);

You are using it like a partial function, because:

-You’ve “partially applied” the first two arguments ("m" and "km")
-The result is a new function waiting for the last argument (value).

So practically:

👉 mtokm is a partially applied version of the curried function.

✅ Exactly right!
You created a curried function, and then used it as a partial function.
That’s the beauty of currying — it enables partial application naturally.
*/
