const userInputPass = document.getElementById("password");
const button = document.querySelector("button");
const message = document.querySelector("#message");

function checkPasswordStrength() {
  const password = userInputPass.value.trim();

  if (!password) {
    message.textContent = "";
    return;
  }

  let strength = "";
  const lengthValid = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);
  const types = [hasUpper, hasLower, hasNumber, hasSymbol].filter(
    Boolean,
  ).length;

  if (!lengthValid) {
    strength = "❌ Too Short (min 8 chars)";
  } else if (types <= 2) {
    strength = "⚠️ Weak";
  } else if (types <= 3) {
    strength = "🟡 Medium";
  } else if (types === 4) {
    strength = "🟢 Strong";
  }
  message.textContent = strength;
}

userInputPass.addEventListener("input", checkPasswordStrength);

/*
===========================================
🧠 REGEX & STRING CHECK METHODS — QUICK NOTES
===========================================

🔹 1. Character Class `[a-z]`
-------------------------------------------
• Matches ONE lowercase letter (a–z)
• Example: /[a-z]/ matches "h" in "Hello"

🔹 2. Negation `[^A-Za-z0-9]`
-------------------------------------------
• ^ inside brackets = NOT these characters
• Matches symbols, spaces, punctuation
• Example: /[^A-Za-z0-9]/ → matches "@", "#", "!"

🔹 3. The .test() Method
-------------------------------------------
• Checks if at least ONE match exists
• Returns: true / false
• Stops searching after the first match
• Example:
    /[a-z]/.test("Hello")  → true  (found 'e')

🔹 4. The .match() Method
-------------------------------------------
• Returns ALL matches as an array
• Returns null if no match
• Use "g" flag for global search
• Example:
    "Hello@123".match(/[a-z]/g)
    → ["e", "l", "l", "o"]

🔹 5. .test() vs .match()
-------------------------------------------
| Feature         | .test()       | .match()          |
|-----------------|----------------|--------------------|
| Purpose         | Exists or not? | Get all matches    |
| Return Type     | Boolean        | Array / null       |
| Stops Early     | ✅ Yes          | ❌ No              |
| Use When        | Need true/false| Need all matches   |

🔹 6. Common Regex Patterns
-------------------------------------------
[A-Z]        → Uppercase letters
[a-z]        → Lowercase letters
[0-9] or \d  → Digits
[^A-Za-z0-9] → Non-alphanumeric (symbols)

🔹 7. Meaning of ^
-------------------------------------------
Inside [] at start → NOT these characters
Outside []         → Start of string

Examples:
    /^A/    → String starts with 'A'
    /[^A]/  → Any character except 'A'

🔹 8. Common Use Cases
-------------------------------------------
Has lowercase → /[a-z]/.test(str)
Has uppercase → /[A-Z]/.test(str)
Has digit     → /\d/.test(str)
Has symbol    → /[^A-Za-z0-9]/.test(str)

===========================================
✅ SUMMARY
-------------------------------------------
.test() → Checks if at least ONE match exists
.match() → Returns ALL matches (array)
^ inside [] → Negation
^ outside [] → Start of string
===========================================

*/
