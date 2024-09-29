// Variables to track scores
let playerScore = 0;
let computerScore = 0;

// Collect the buttons, message area, and choice display
const buttons = document.querySelectorAll(".RPS");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const msg = document.getElementById("msg");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");

// Generate computer choice randomly
const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const compChoice = options[Math.floor(Math.random() * options.length)];
    return compChoice;
}

// Compare choices and determine winner
const playGame = (playerChoice) => {
    const compChoice = generateComputerChoice();
    playerChoiceDisplay.innerText = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    computerChoiceDisplay.innerText = compChoice.charAt(0).toUpperCase() + compChoice.slice(1);
    
    if (playerChoice === compChoice) {
        msg.innerHTML = "It's a tie! 🤝";
        msg.className = "tie-message";
    } else if ((playerChoice === "rock" && compChoice === "scissors") ||
               (playerChoice === "paper" && compChoice === "rock") ||
               (playerChoice === "scissors" && compChoice === "paper")) {
        playerScore++;
        msg.innerHTML = "You win! 🎉🎊";
        msg.className = "winner-message";
    } else {
        computerScore++;
        msg.innerHTML = "Computer wins! 😔";
        msg.className = "loser-message";
    }

    // Update scores
    playerScoreDisplay.innerText = playerScore;
    computerScoreDisplay.innerText = computerScore;
}

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.dataset.choice;
        playGame(playerChoice);
    });
});
