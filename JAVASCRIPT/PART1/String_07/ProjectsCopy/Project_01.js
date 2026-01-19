function textValidate(text) {
  text = text.trim().toLowerCase().normalize("NFKC");
  text = text.replace(/\s+/g, " ");

  return sentenceAnalyzer(text);
}

function sentenceAnalyzer(text) {
  let words = text
    .split(/\s+/g)
    .map((wr) => wr.replace(/[^a-z]/gi, ""))
    .filter(Boolean);

  let wordLength = words.length;

  let sentenceCount = text.split(/[.!?]/).filter(Boolean).length;

  let avgWordLength = (text.match(/[a-z]/g)?.length ?? 0) / wordLength || 0;

  let specialChCount = text.match(/[^a-z\s\d]/gi)?.length ?? 0;

  let countDigits = text.match(/[0-9]/g)?.length ?? 0;

  let freq = {};
  let repeatedWord = [];

  for (const word of words) {
    freq[word] = (freq[word] || 0) + 1;
  }
  for (let word in freq) {
    if (freq[word] > 1) {
      repeatedWord.push(word);
    }
  }

  return {
    wordLength: wordLength,
    sentenceCount: sentenceCount,
    avgWordLength: avgWordLength,
    specialChCount: specialChCount,
    countDigits: countDigits,
    repeatedWord: repeatedWord,
  };
}
console.log(textValidate("hi? hi! are you."));
