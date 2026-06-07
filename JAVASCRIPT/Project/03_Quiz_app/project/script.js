import { quizData } from "./quizData.js";

const nextBtn = document.querySelector(".nextBtn");
const questionEl = document.querySelector(".question");
const answersBtn = document.querySelectorAll(".answer");
const scoreEl = document.querySelector(".score");
const containerEl = document.querySelector(".container");

let currentQuestionIndex = 0;
let score = 0;
let isQuizRunning = true;

function showQuestion() {
  questionEl.textContent = `${currentQuestionIndex + 1}. ${quizData[currentQuestionIndex].question}`;

  answersBtn.forEach((answerBtn, index) => {
    answerBtn.textContent = quizData[currentQuestionIndex].answers[index];
    answerBtn.disabled = false;
    answerBtn.classList.remove("correct", "incorrect");
  });

  nextBtn.disabled = true;
}

function disableAllAnswers() {
  answersBtn.forEach((answerBtn) => {
    answerBtn.disabled = true;
  });
}

answersBtn.forEach((answerBtn) => {
  answerBtn.addEventListener("click", (e) => {
    nextBtn.disabled = false;

    let answer = e.target.textContent;
    if (answer === quizData[currentQuestionIndex].correct) {
      e.target.classList.add("correct");
      score++;
      disableAllAnswers();
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
  scoreEl.textContent = `Score: ${score} / ${quizData.length}`;
  nextBtn.disabled = true;
}

nextBtn.addEventListener("click", () => {
  if (isQuizRunning) {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      showQuestion();
    } else {
      showScore();
      scoreEl.style.display = "block";
      containerEl.style.display = "none";
      nextBtn.textContent = "Restart";
      nextBtn.disabled = false;
      isQuizRunning = false;
    }
  } else {
    currentQuestionIndex = 0;
    score = 0;
    scoreEl.style.display = "none";
    showQuestion();
    nextBtn.textContent = "Next";
    nextBtn.disabled = false;
    containerEl.style.display = "block";
    isQuizRunning = true;
  }
});

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
