const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const playerScore = document.getElementById("player-score");
const comScoreEl = document.getElementById("computer-score");
const resultEl = document.getElementById("result");
const resetGameEl = document.getElementById("reset-game");

let yourScore = 0;
let comScore = 0;
let attempt = 10;

function checkAttempts() {
  return --attempt;
}

function gameStart(e) {
  let remainingAttempt = checkAttempts();

  if (remainingAttempt > 1) {
    const comChoice = ["rock", "paper", "scissor"];
    const playerChoice = e.currentTarget.id;

    const compChoiceValue = Math.floor(Math.random() * 3);
    const comCh = comChoice[compChoiceValue];

    if (comCh == playerChoice) {
      comScore;
      playerScore;
    } else if (
      (comCh == "rock" && playerChoice == "scissor") ||
      (comCh == "paper" && playerChoice == "rock") ||
      (comCh == "scissor" && playerChoice == "paper")
    ) {
      comScore++;
    } else if (
      (comCh == "scissor" && playerChoice == "rock") ||
      (comCh == "rock" && playerChoice == "paper") ||
      (comCh == "paper" && playerChoice == "scissor")
    ) {
      yourScore++;
    }

    playerScore.textContent = yourScore;
    comScoreEl.textContent = comScore;
    resultEl.textContent = `Total Chances left ${remainingAttempt}`;
  } else {
    if (yourScore > comScore) {
      resultEl.textContent = `You Win By ${yourScore - comScore} Score`;
      scissor.classList.add("pointer-events-none");
      rock.classList.add("pointer-events-none");
      paper.classList.add("pointer-events-none");
      resetGameEl.classList.remove("hidden");
    } else if (comScore > yourScore) {
      resultEl.textContent = `Computer Win By ${comScore - yourScore} Score`;
      resetGameEl.classList.remove("hidden");
      scissor.classList.add("pointer-events-none");
      rock.classList.add("pointer-events-none");
      paper.classList.add("pointer-events-none");
    } else {
      resultEl.textContent = "Match is Tie";
      resetGameEl.classList.remove("hidden");
      scissor.classList.add("pointer-events-none");
      rock.classList.add("pointer-events-none");
      paper.classList.add("pointer-events-none");
    }
  }
}
rock.addEventListener("click", gameStart);
paper.addEventListener("click", gameStart);
scissor.addEventListener("click", gameStart);
