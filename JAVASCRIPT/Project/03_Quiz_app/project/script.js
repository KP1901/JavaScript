import { quizData } from "./quizData.js";

const nextBtn = document.querySelector(".nextBtn");
const questionEl = document.querySelector(".question");
const answersBtn = document.querySelectorAll(".answer");

let currentQuestionIndex = 0;

function showQuestion() {
  questionEl.textContent = `${currentQuestionIndex + 1} ${quizData[currentQuestionIndex].question}`;

  answersBtn.forEach((answerBtn, index) => {
    answerBtn.textContent = quizData[currentQuestionIndex].answers[index];
    answerBtn.disabled = false;
    answerBtn.classList.remove("correct");
    answerBtn.classList.remove("incorrect");
  });
}

answersBtn.forEach((answerBtn, index) => {
  answerBtn.addEventListener("click", (e) => {
    let answer = e.target.textContent;
    if (answer === quizData[currentQuestionIndex].correct) {
      e.target.classList.add("correct");
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

if (currentQuestionIndex <= quizData.length - 1) {
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    showQuestion();
    console.log(currentQuestionIndex);
  });
} else {
  nextBtn.disabled = true;
}

showQuestion();
