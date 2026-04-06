const badWords = [
  "asshole",
  "bastard",
  "bitch",
  "bloody",
  "bollocks",
  "cunt",
  "damn",
  "dumb",
  "dick",
  "douche",
  "fag",
  "faggot",
  "fuck",
  "motherfucker",
  "nigger",
  "piss",
  "prick",
  "pussy",
  "shit",
  "slut",
  "twat",
  "whore",
  "wanker",
  "arse",
  "arsehole",
  "bastards",
  "bitches",
  "cunts",
  "dicks",
  "douchebag",
  "fags",
  "faggots",
  "fucks",
  "motherfuckers",
  "niggas",
  "pisses",
  "pricks",
  "pussies",
  "shits",
  "sluts",
  "twats",
  "whores",
  "wankers",
  "bimbo",
  "bitchy",
  "bastardly",
  "bloody",
  "cock",
  "cocksucker",
  "crap",
  "cum",
  "cuntish",
  "dildo",
  "dyke",
  "faggy",
  "faggotry",
  "fucked",
  "fucker",
  "fucking",
  "gay",
  "gayass",
  "goddamn",
  "homo",
  "homoerotic",
  "horny",
  "incest",
  "jizz",
  "kike",
  "lesbo",
  "lesbian",
  "lube",
  "masturbate",
  "mofo",
  "nigga",
  "niglet",
  "paki",
  "piss",
  "pissed",
  "pisshead",
  "pisspoor",
  "poop",
  "prickish",
  "queer",
  "rape",
  "retard",
  "screw",
  "stupid",
  "semen",
  "sex",
  "sexy",
  "shithead",
  "shitty",
  "slutty",
  "smegma",
  "sod",
  "sodomy",
  "spunk",
  "tits",
  "titty",
  "twatty",
  "vagina",
  "vulva",
  "wank",
  "wanker",
  "whoring",
  "zoophile",
  "zoophilia",
];

let text = "You are stuPid! What the fucK is this aSs-hole behavior?";


function processWord(word) {
  let lowerWord = word.toLowerCase();
  if (badWords.includes(lowerWord)) {
    return "*".repeat(word.length);
  }

  return word;
}

function censorText(text, badWords) {
  let currentWord = "";
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let ch = text[i];
    if (/[a-zA-Z]/.test(ch)) {
      currentWord += ch;
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

console.log(censorText(text, badWords));

// let text = "You are stuPid! What the fucK is this aSs-hole behavior?";