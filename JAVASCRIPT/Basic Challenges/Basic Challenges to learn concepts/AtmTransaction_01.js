/*
1. Smart ATM Transaction System
Description:
Create an ATM program that:
Asks for account type (Savings, Current) → switch
If Savings: Withdrawal limit = ₹25,000, Current = ₹50,000.
Check:
Withdrawal amount is a multiple of 100
Does not exceed balance
Does not exceed account limit
If valid → Deduct & show new balance, else show specific error message.
Skills: Nested if-else inside a switch with multiple validations.
*/

const prompt = require(`prompt-sync`)({ sigint: true });

let accountType = prompt(`enter the account type : `);
accountType = accountType.toLowerCase();

let userAccount = {
  accNumber: 123456,
  type: "savings",
  balance: 75000,
};
let limits = {
  savingAccLimit: 25000,
  currentAccLimit: 50000,
};

if (accountType !== userAccount.type) {
  console.log("please provide a correct account type");
  process.exit();
} else {
  switch (accountType) {
    case "savings":
      {
        atmTransaction(userAccount, limits.savingAccLimit);
      }
      break;
    case "current":
      {
        atmTransaction(userAccount, limits.currentAccLimit);
      }
      break;
    default:
      console.log("invalid account type");
  }
}

function atmTransaction(userAccount, limit) {
  let WithdrawalAmount = Number(prompt(`enter the withdraw amount : `));
  if (WithdrawalAmount % 100 !== 0) {
    console.log(`the amount is not multiple of 100`);
    return;
  }
  if (WithdrawalAmount > userAccount.balance) {
    console.log(`insufficent balance`);
    return;
  }
  if (!(WithdrawalAmount <= limit)) {
    console.log(`your account limit is ${limit}`);
    return;
  }
  userAccount.balance -= WithdrawalAmount;
  console.log(`so your new balance is ${userAccount.balance}`);
}
