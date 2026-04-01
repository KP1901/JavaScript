function textAnalyzer(text) {
  let text = text.trim();

  let Characters = text.length;

  let wordCount = text.split(/\s+/).filter((word) => word !== "").length;

  let vowels = text.match(/[aeiouAEIOU]/g)?.length ?? 0;

  let letters = text.match(/[a-zA-Z]/g)?.length ?? 0;

  let consonant = letters - vowels;

  let readingTime = (wordCount / 200).toFixed(2);

  return `===== TEXT ANALYSIS REPORT =====
Characters : ${Characters} 
Words : ${wordCount}
Vowels : ${vowels}
Consonat : ${consonant}
ReadingTime (min) : ${readingTime}
`;
}

console.log(
  textAnalyzer(
    "JavaScript makes text processing fast! Let's test our analyzer.",
  ),
);
