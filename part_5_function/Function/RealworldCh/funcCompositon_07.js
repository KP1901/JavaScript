/*
🎯 Your goal:

Use function composition to clean and standardize this data.

Create a function processTransaction that:

-Trims spaces in amount and type.
-Converts amount to a number.
-Converts type to lowercase.
-Ensures that debit transactions have a negative amount, and credit ones have positive.
*/

const transactions = [
  { id: 1, amount: "   2000 ", type: " CREDIT " },
  { id: 2, amount: " -500 ", type: " debit " },
  { id: 3, amount: "-1000", type: " CREDIT" },
];

function trimSpace(transactions) {
  return transactions.map((txn) => ({
    id: txn.id,
    amount: txn.amount.trim(),
    type: txn.type.trim(),
    // for next porperty.. and so on
  }));
}

// useful for all string properties

// function trimAllStringInArray(transactions) {
//   return transactions.map((obj) => {
//     const newObj = {};
//     for (let key in obj) {
//       newObj[key] = typeof obj[key] === "string" ? obj[key].trim() : obj[key];
//     }
//     return newObj;
//   });
// }
// console.log(trimAllStringInArray(transactions));

function convertToNumber(transactions) {
  return transactions.map((txt) => ({
    id: txt.id,
    amount: Number(txt.amount),
    type: txt.type,
  }));
}

// function convertAllNumber(transactions) {
//   return transactions.map((obj) => {
//     let newObj = {};
//     for (let key in obj) {
//       newObj[key] = !isNaN(obj[key]) ? Number(obj[key]) : obj[key];
//     }
//     return newObj;
//   });
// }
// console.log(convertAllNumber(transactions));

function convertToLower(transactions) {
  return transactions.map((txn) => ({
    id: txn.id,
    amount: txn.amount,
    type: txn.type.toLowerCase(),
  }));
}

// function convertAllStrToLower(transactions) {
//   return transactions.map((obj) => {
//     let newObj = {};
//     for (let key in obj) {
//       newObj[key] =
//         typeof obj[key] === "string" ? obj[key].toLowerCase() : obj[key];
//     }
//     return newObj;
//   });
// }
// console.log(convertAllStrToLower(transactions));

function ensuureTran(transactions) {
  return transactions.map((txn) => ({
    id: txn.id,
    amount: txn.type === "debit" ? -Math.abs(txn.amount) : Math.abs(txn.amount),
    type: txn.type,
  }));
}

function CompositionFn(...fns) {
  return function (value) {
    return fns.reduce((acc, fn) => fn(acc), value);
  };
}

let cleaned = CompositionFn(
  trimSpace,
  convertToNumber,
  convertToLower,
  ensuureTran
);
console.log(cleaned(transactions));
