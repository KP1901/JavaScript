const questions = [
  {
    question: "Which is Largest animal in The World",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "What is the longform of WHO",
    answers: [
      { text: "World Health organistation", correct: true },
      { text: "Blue whale", correct: false },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is Largest animal in The World",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is Largest animal in The World",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
];

const questionBtn = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let isAnswerSelected = false;

function showQuestion() {
  answerButtons.innerHTML = "";

  const currentQuestion = questions[currentQuestionIndex];

  const questionNo = currentQuestionIndex + 1;

  questionBtn.textContent = `${questionNo}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.dataset.correct = answer.correct;
    button.className = "btn";
    button.textContent = answer.text;

    answerButtons.appendChild(button);
    button.addEventListener("click", showAnswer);
  });
}
function showAnswer(e) {
  const selectedBtn = e.target;
  isAnswerSelected = true;

  if (selectedBtn.dataset.correct === "true") {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
}

function showScore() {
  answerButtons.innerHTML = "";

  questionBtn.textContent = `Your Score is ${score} out of ${questions.length}`;
  nextButton.textContent = "Play Again";
}

function handleNextButton() {
  if (!isAnswerSelected) {
    return;
  }
  currentQuestionIndex++;
  isAnswerSelected = false;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.textContent = "Next";
  showQuestion();
}

startQuiz();

/*

Problems :
1️⃣ Mistake: Using DOM to control app flow ❌
❌ What you did
buttons.forEach((button) => {
  if (button.classList.contains("correct")) {
    currentQuestionIndex++;
  }
});


Problem:

Logic depends on DOM

Multiple buttons → multiple decisions

✅ How you fixed it
if (!isAnswerSelected) return;

currentQuestionIndex++;


✔ Logic now depends on state

2️⃣ Mistake: Looping to decide “Next” ❌
❌ What you did
document.querySelectorAll(".btn").forEach(...)


Problem:

One click → many checks

✅ How you fixed it
function handleNextButton() {
  if (!isAnswerSelected) return;
  currentQuestionIndex++;
}


✔ One click → one increment

3️⃣ Mistake: Mixing “correct” with “selected” ❌
❌ What you did
button.classList.contains("correct")


Problem:

This means “answer is correct”

NOT “user selected an answer”

✅ How you fixed it
let isAnswerSelected = false;

function showAnswer() {
  isAnswerSelected = true;
}


✔ Selection is tracked explicitly

4️⃣ Mistake: Updating state while rendering ❌
❌ What you did
currentQuestion.answers.forEach(() => {
  isAnswerSelected = true;
});


Problem:

User didn’t click yet

State became wrong

✅ How you fixed it
function showAnswer() {
  isAnswerSelected = true;
}


✔ State changes only on user action

5️⃣ Mistake: Wrong order of index update ❌
❌ What you did
showQuestion();
currentQuestionIndex++;


Problem:

Same question shown again

✅ How you fixed it
currentQuestionIndex++;
showQuestion();


✔ State first, UI second
*/
