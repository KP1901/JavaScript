function textAnalyzer(text) {
  text = text.trim();

  let characters = text?.length ?? 0;
  let words = text.split(/\s+/g)?.length ?? 0;
  let vowels = text.match(/[aeiouAEIOU]/g)?.length ?? 0;
  let consonant = characters.length - vowels.length;
  let readingTime = ((words / 200) * 60).toFixed(2);
  
  return `===== TEXT ANALYSIS REPORT =====
   Characters : ${characters}
   Words : ${words}
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
