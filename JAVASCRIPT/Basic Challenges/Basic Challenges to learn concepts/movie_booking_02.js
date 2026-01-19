function calculateTicketPrice(movieType, day, time, seatType, age) {
  movieType = movieType.toLowerCase();
  day = day.toLowerCase();
  time = time.toLowerCase();
  seatType = seatType.toLowerCase();

  let basePrice;

  switch (movieType) {
    case "2d":
      basePrice = 200;
      break;
    case "3d":
      basePrice = 350;
      break;
    case "imax":
      basePrice = 500;
      break;
    default:
      return "invalid movie type";
  }

  if (day === "wednesday") basePrice *= 0.5;
  if (time === "morning") basePrice *= 0.9;
  if (seatType === "premium") basePrice += 150;

  // ✅ Validate age
  age = Number(age);
  if (Number.isNaN(age)) {
    return "age is not number";
  }

  // ✅ Apply discount only if valid and < 10
  if (age < 10) basePrice *= 0.7;

  return basePrice;
}

// ✅ Works with number
console.log(calculateTicketPrice("imax", "wednesday", "morning", "premium", 5)); // discounted

// ✅ Works with numeric string
console.log(
  calculateTicketPrice("imax", "wednesday", "morning", "premium", "7")
); // discounted

// ❌ Invalid input
console.log(
  calculateTicketPrice("imax", "wednesday", "morning", "premium", "av1")
); // "age is not number"

// way 2 - optimized us

// function calculateTicketPrice(movieType, day, time, seatType, age) {
//   movieType = movieType.toLowerCase();
//   day = day.toLowerCase();
//   time = time.toLowerCase();
//   seatType = seatType.toLowerCase();

//   let basePrices = {
//     "2d": 200,
//     "3d": 350,
//     imax: 500,
//   };

//   //   if you want to check the key typed by user is present in object key
//   if (!(movieType in basePrices)) {
//     return "invalid";
//   }

//   let price = basePrices[movieType];

//   if (day === "wednesday") {
//     price *= 0.5;
//   }
//   if (time === "morning") {
//     price *= 0.9;
//   }
//   if (seatType === "premium") {
//     price += 150;
//   }
//   if (age > 0 && age < 10) {
//     price *= 0.7;
//   }
//   return price.toFixed(2);
// }

// let finalFare = calculateTicketPrice(
//   "imax",
//   "wednesday",
//   "morning",
//   "premium",
//   5
// );
// console.log(finalFare);
