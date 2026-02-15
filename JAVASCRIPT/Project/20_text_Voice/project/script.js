const speech = new SpeechSynthesisUtterance();

let voices = [];
const voiceSelect = document.querySelector("select");
const button = document.querySelector("button");
const textarea = document.querySelector("textarea");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  voiceSelect.innerHTML = ""; // clear old options

  voices.forEach((voice, i) => {
    voiceSelect.options[i] = new Option(voice.name, i);
  });

  console.log("Voices loaded:", voices);
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

button.addEventListener("click", () => {
  window.speechSynthesis.cancel(); // prevent queue buildup

  speech.text = textarea.value;
  window.speechSynthesis.speak(speech);
});


/*


*/