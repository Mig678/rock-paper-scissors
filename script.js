function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);

    if(choice === 0){
        return 'rock';
    } else if(choice === 1){
        return 'paper';
    } else{
        return 'scissors'
    }
}

function getHumanChoice() {
    const input = prompt("Type Rock, Paper, or Scissors:");
    return input.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
  
    function playRound(humanChoice, computerChoice) {
      const player = humanChoice.toLowerCase();
      const computer = computerChoice.toLowerCase();
  
      if (player === computer) {
        console.log("It's a tie!");
      } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
      ) {
        console.log(`You win! ${player} beats ${computer}`);
        humanScore++;
      } else {
        console.log(`You lose! ${computer} beats ${player}`);
        computerScore++;
      }
  
      console.log(`Score => You: ${humanScore}, Computer: ${computerScore}`);
    }
  
    // Loop for 5 rounds
    for (let i = 1; i <= 5; i++) {
      console.log(`--- Round ${i} ---`);
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
    }
  
    // Declare overall winner
    console.log("--- Game Over ---");
    if (humanScore > computerScore) {
      console.log("🏆 You won the game!");
    } else if (computerScore > humanScore) {
      console.log("💻 Computer won the game!");
    } else {
      console.log("🤝 It's a tie overall!");
    }
  }
  
  // Start the game
  playGame();
  