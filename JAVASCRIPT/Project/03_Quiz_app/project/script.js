import { quizData } from "./quizData.js";

const nextBtn = document.querySelector(".nextBtn");
const questionEl = document.querySelector(".question");
const answers = document.querySelectorAll(".answer");

let currentQuestionIndex = 0;
