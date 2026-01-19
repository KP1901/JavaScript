// 📌 Example: Bank Account with Module Encapsulation this is 4th way
// bankAccount.js

// 🔒 Private data (not exported, so hidden outside this file)
let balance = 0;

// 🔒 Private helper function
function validateAmount(amount) {
  return amount > 0;
}

// ✅ Public API (only these are exported)
export function deposit(amount) {
  if (validateAmount(amount)) {
    balance += amount;
    console.log(`Deposited: ${amount}`);
  } else {
    console.log("Invalid deposit amount");
  }
}

export function withdraw(amount) {
  if (validateAmount(amount) && amount <= balance) {
    balance -= amount;
    console.log(`Withdrwa: ${amount}`);
  } else {
    console.log("Invalid Withdrawl amount");
  }
}
export function getBalance() {
  return balance;
}

// export { setSecret, revealSecretTo, clearSecret };
