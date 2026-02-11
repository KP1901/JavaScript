function textAnalyzer(text) {
  text = text.trim();

  let characters = text.length;

  let wordCount = text.split(/\s+/g).length;

  let vowels = text.match(/[aeiouAEIOU]/g)?.length ?? 0;

  let letters 
}

console.log(
  textAnalyzer(
    "JavaScript makes text processing fast! Let's test our analyzer.",
  ),
);
