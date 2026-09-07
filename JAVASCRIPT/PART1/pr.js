const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (text) => {
  return new Promise((resolve) => rl.question(text, resolve));
};

async function main() {
  let balance = 3000;

  while (true) {
    let option = Number(
      await question(`
choose operations:
1 -> Check Balance
2 -> Deposit
3 -> Withdraw
4 -> Exit
 `),
    );
    switch (option) {
      case 1:
        console.log(balance);
        break;
      case 2:
        let dAmount = Number(await question("enter deposit amount"));
        balance += dAmount;
        break;
      case 3:
        let wAmount = Number(await question("enter Withdraw amount"));
        balance -= wAmount;
        break;
      case 4:
        console.log("Thank you for using ATM");
        rl.close();
        return;
      default:
        console.log("Invalid Choice");
    }
  }
}
main();
