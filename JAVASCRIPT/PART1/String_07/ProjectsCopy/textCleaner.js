function textCleaner(text) {
  text = text.trim();

  text = text.replace(/\s+/g, " ").toLowerCase();

  text = text.replace(/\b\w/g, (char) => char.toUpperCase());

  //   text = text.replace(/[^0-9a-zA-Z\s]+/g, (char) => char.slice(0, 1));

  text = text.replace(/\s+([.!?])\1+/g, "$1");

  text = text.replace(/\s+([!?.])/g, "$1");

  return text;
}

let result = textCleaner(
  "   hELLo!!!   my   NAME   is   kIRAN  .   I   LOVE   JavaScript!!!   ",
);
console.log(result);

// "Hello!!! My Name Is Kiran. I Love Javascript!!!"
