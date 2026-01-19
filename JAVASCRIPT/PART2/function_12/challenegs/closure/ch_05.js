function Bank() {
  let balance = 100; // private variable

  return function getBalance() {
    console.log(balance);
  };
}
let getBalance = Bank();
getBalance();

/*
Closure – Q5 Notes (Private Variable)

-balance is declared inside Bank, so it is function-scoped.
-Code outside Bank cannot access balance directly.
-getBalance forms a closure over balance.
-Closure keeps balance alive after Bank finishes execution.
-Only the returned function has access to balance.
-This pattern is used for data hiding / encapsulation.
*/
