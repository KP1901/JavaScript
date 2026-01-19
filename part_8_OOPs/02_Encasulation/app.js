//  show on interface it showing only this behide the logic it is store in encapsulation on bankAccount.js

import { deposit, withdraw, getBalance } from "./bankAccount.js";

// ✅ Using the public API
deposit(1000);
withdraw(300);
console.log(getBalance());

// ❌ Trying to access private things
console.log(balance); // ReferenceError: balance is not defined
console.log(validateAmount); // ReferenceError: validateAmount is not defined

/*
🟢 Explanation

1.Encapsulation via Modules
-The file bankAccount.js keeps balance and validateAmount inside its scope.
-They are not exported, so outside code can’t touch them.

2.Public vs Private
-Private → balance, validateAmount (internal details).
-Public → deposit, withdraw, getBalance (the API you export).

3.How encapsulation works here

-Outside code (app.js) can only use what you export.
-Even if someone tries console.log(balance) in app.js, it fails → the variable is not in scope.
-This is exactly encapsulation: hiding the guts, exposing only the safe API.


*/
