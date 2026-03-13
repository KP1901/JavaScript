/*
Abstraction means:

-exposing only the required interface and hiding the internal implementation.
-User knows what to do, but not how it is done.

Example:

Pay money

User doesn't care whether it is:

-Credit Card
-UPI
-Net Banking
-Wallet

They just call pay().

*/

// Example :

class Payment {
  pay(amount) {
    throw new Error("child class must implemented");
  }
}
class CreditCardPayment extends Payment {
  pay(amount) {
    console.log(`${amount} paid using Credit Card`);
  }
}
class UpiPayment extends Payment {
  pay(amount) {
    console.log("payment done");
  }
}
const cr = new CreditCardPayment();
const upi = new UpiPayment();

cr.pay(100);
upi.pay(100);

