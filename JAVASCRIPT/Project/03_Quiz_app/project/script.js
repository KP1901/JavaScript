import { quizData } from "./quizData.js";

const nextBtn = document.querySelector(".nextBtn");
const questionEl = document.querySelector(".question");
const answersBtn = document.querySelectorAll(".answer");
const scoreEl = document.querySelector(".score");
const containerEl = document.querySelector(".container");

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
  questionEl.textContent = `${currentQuestionIndex + 1}. ${quizData[currentQuestionIndex].question}`;
  console.log(currentQuestionIndex);

  answersBtn.forEach((answerBtn, index) => {
    answerBtn.textContent = quizData[currentQuestionIndex].answers[index];
    answerBtn.disabled = false;
    answerBtn.classList.remove("correct");
    answerBtn.classList.remove("incorrect");
  });

  nextBtn.disabled = true;
}

answersBtn.forEach((answerBtn, index) => {
  answerBtn.addEventListener("click", (e) => {
    nextBtn.disabled = false;

    let answer = e.target.textContent;
    if (answer === quizData[currentQuestionIndex].correct) {
      e.target.classList.add("correct");
      score++;
      answersBtn.forEach((answerBtn) => {
        answerBtn.disabled = true;
      });
    } else {
      e.target.classList.add("incorrect");
      answersBtn.forEach((answerBtn) => {
        answerBtn.disabled = true;
        if (answerBtn.textContent == quizData[currentQuestionIndex].correct) {
          answerBtn.classList.add("correct");
        }
      });
    }
  });
});

function showScore() {
  scoreEl.textContent = `${score} / ${quizData.length} are True`;
  nextBtn.disabled = true;
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (nextBtn.textContent == "Next") {
    if (currentQuestionIndex < quizData.length) {
      showQuestion();
    } else {
      runApp();
      containerEl.innerHTML = "";
      nextBtn.textContent = "Restart";
      nextBtn.disabled = false;
    }
  } else {
    currentQuestionIndex = 0;
    showQuestion();
    // nextBtn.textContent = "Next";
    nextBtn.disabled = false;
  }
});

// nextBtn.addEventListener("click", () => {
//   nextBtn.textContent = "Next";
//   nextBtn.disabled = false;
// });

function runApp() {
  showQuestion();
}

runApp();

/* 
0 -> 1  so 1 < 6
1 -> 2  so 2 < 6
2 -> 3  so 3 < 6
3 -> 4  so 4 < 6
4 -> 5  so 5 < 6
5 -> 6  so 6 < 6

*/
