const buttons = document.querySelectorAll("button");
const statusEl = document.querySelector(".status");
const scoresEl = document.querySelector(".scores");
const restartEl = document.querySelector(".restart-game a");

let attempts = 10;
let playerScore = 0;
let comScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (attempts > 1) {
      --attempts;
      statusEl.textContent = gamePlay(button.id, computerPlay());
      console.log(attempts);
    } else {
      if (playerScore > comScore) {
        statusEl.textContent = `You beats! Computer by ${
          playerScore - comScore
        } score`;
        restartEl.style.display = "inline-block";
      } else if (comScore > playerScore) {
        statusEl.textContent = `Computer beats! You by ${
          comScore - playerScore
        } score`;
        restartEl.style.display = "inline-block";
      } else {
        statusEl.textContent = `Match tie!`;
        restartEl.style.display = "inline-block";
      }
    }
  });
});

const computerPlay = () => {
  const choice = ["rock", "paper", "scissor"];
  const randomValue = Math.floor(Math.random() * choice.length);
  return choice[randomValue];
};

function gamePlay(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    return `Match  tie [Attempts : ${attempts} left]`;
  } else if (
    (computerChoice == "rock" && playerChoice == "scissor") ||
    (computerChoice == "paper" && playerChoice == "rock") ||
    (computerChoice == "scissor" && playerChoice == "paper")
  ) {
    comScore++;
    scoresEl.querySelector("#computer-score").textContent = comScore;
    return `Computer wins! ${computerChoice} beats ${playerChoice} [Attempts : ${attempts} left]`;
  } else if (
    (computerChoice == "scissor" && playerChoice == "rock") ||
    (computerChoice == "rock" && playerChoice == "paper") ||
    (computerChoice == "paper" && playerChoice == "scissor")
  ) {
    playerScore++;
    scoresEl.querySelector("#player-score").textContent = playerScore;
    return `You wins! ${playerChoice} beats ${computerChoice} [Attempts : ${attempts} left]`;
  }
}
