let playerScore = 0;
let computerScore = 0;

const resultsDiv = document.querySelector("#results");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }

  const wins = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  if (wins[playerSelection] === computerSelection) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function updateUI(message) {
  resultsDiv.innerHTML = `
    <p>${message}</p>
    <p>Player: ${playerScore} | Computer: ${computerScore}</p>
  `;

  if (playerScore === 5 || computerScore === 5) {
    const winner = playerScore === 5 ? "You win the game!" : "Computer wins the game!";
    resultsDiv.innerHTML += `<h2>${winner}</h2>`;
    disableButtons();
  }
}

function disableButtons() {
  document.querySelectorAll("button").forEach(btn => btn.disabled = true);
}

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    updateUI(result);
  });
});
