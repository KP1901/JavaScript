/*

let text = "Hello world! How are you?";

🎯 Your Task

👉 Reverse each word in the sentence

BUT follow rules:

✅ Rules

Reverse only letters (word)

"Hello" → "olleH"

Keep punctuation in same place

"world!" → "dlrow!"
"you?" → "uoy?"

Keep spaces exactly same

🧠 Expected Output

"olleH dlrow! woH era uoy?"
*/

let text = "Hello world! How are you?";

function processWord(word) {
  let revWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    revWord += word[i];
  }
  return revWord;
}

function reverseText(text) {
  let currentWord = "";
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let ch = text[i];
    if (/[a-zA-Z]/.test(ch)) {
      currentWorld += ch;
    } else {
      if (currentWord.length > 0) {
        result += processWord(currentWord);
        currentWord = "";
      }
      result += ch;
    }
  }
  if (currentWord.length > 0) {
    result += processWord(currentWord);
  }
  return result;
}

console.log(reverseText(text));
