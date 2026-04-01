function palindromeChecker(text) {
  text = text.trim().toLowerCase();

  text = text.replace(/[^a-z0-9]/g, "");

  const reversed = text.split("").reverse().join("");

  return text === reversed;
}
// Test examples
const testStrings = [
  "Madam",
  "racecar",
  "A man, a plan, a canal, Panama!",
  "No lemon, no melon",
  "Hello",
  "Was it a car or a cat I saw?",
];

for (const test of testStrings) {
  console.log(`${test} -> ${palindromeChecker(test)}`);
}
