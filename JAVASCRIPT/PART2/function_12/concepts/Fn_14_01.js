function logger(prefix, message) {
  return `${prefix} ${message}`;
}

const errorMsg = logger.bind(null, "Error");

console.log(errorMsg("Not Found"));

/*
Behind the scenes, bind creates a new function like
boundFn(...args) { return logger("Error", ...args); }.

When errorMsg("NOt founf") is called, the bound function receives "not found" as arguments, combines them with the pre-bound value "Error", and internally calls multiply("Error","Not Found"), which returns the result.
*/

/*

1️⃣ Global Execution Context (GEC)

When JS starts, Global EC is created.

🧠 GEC – Memory Creation Phase

(JS scans the whole file first)

Global Lexical Environment
├─ Environment Record
│   ├─ logger → <function>
│   ├─ errorMsg → <uninitilized>
│   ├─ console → <object>
│
├─ Outer → null


⚠️ No code executed yet
⚠️ Functions are fully hoisted

▶️ GEC – Execution Phase
Line 1
function logger(prefix, message) { ... }


✔ Already handled in memory phase

2️⃣ logger.bind(null, "Error")
❗ Important

bind() does NOT execute logger

It creates a new function object with hidden internal slots.

🧠 What bind creates internally
errorMsg → Bound Function Object


Internal slots of errorMsg:

[[BoundTargetFunction]] → logger
[[BoundThis]] → null
[[BoundArguments]] → ["Error"]


So conceptually:

errorMsg = function boundLogger(...args) {
  return logger("Error", ...args);
}


✔ Still NO new execution context

GEC After This Line
Global Lexical Environment
├─ logger → <function>
├─ errorMsg → <bound function>
├─ console → <object>

3️⃣ console.log(errorMsg("Not Found"))

Now execution begins.

4️⃣ Calling errorMsg("Not Found")
📚 Call Stack Now
┌─────────────────┐
│ errorMsg EC     │
├─────────────────┤
│ Global EC       │
└─────────────────┘

🧠 errorMsg Execution Context
Memory Creation Phase
errorMsg Lexical Environment
├─ Environment Record
│   ├─ arguments → ["Not Found"]
│   ├─ message → "Not Found"
│
├─ this → null   (because bound)
├─ Outer → Global Lexical Environment


⚠️ No prefix here — already pre-fixed by bind

▶️ Execution Phase

Internally JS does:

logger("Error", "Not Found");


So now logger is called.

5️⃣ logger("Error", "Not Found")
📚 Call Stack
┌─────────────────┐
│ logger EC       │
├─────────────────┤
│ errorMsg EC     │
├─────────────────┤
│ Global EC       │
└─────────────────┘

🧠 logger Execution Context
Memory Creation Phase
logger Lexical Environment
├─ Environment Record
│   ├─ prefix → "Error"
│   ├─ message → "Not Found"
│
├─ this → undefined (normal function call)
├─ Outer → Global Lexical Environment

▶️ Execution Phase
return `${prefix} ${message}`;


➡️ Evaluates to:

"Error Not Found"

*/
