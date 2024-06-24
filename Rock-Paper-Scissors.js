const optionsSection = document.querySelector(".options-section");
const resultSection = document.querySelector(".result-section");
const options = document.querySelectorAll(".options-section i"); // Select icons within the options section
const playAgainbtn = document.getElementById("playAgain");
const playericon = document.getElementById("yourchoiceicon");
const computericon = document.getElementById("computerchoiceicon");
const winlose = document.getElementById("win-lose");
const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");

let playerCounter = 0;
let computerCounter = 0;

playerScoreElement.textContent = 0;
computerScoreElement.textContent = 0;

const icons = {
  rock: "fa-solid fa-hand-back-fist",
  paper: "fa-solid fa-hand",
  scissors: "fa-solid fa-hand-scissors"
};

let playerChoice;
let computerChoice;
hideSection(resultSection);

options.forEach(option => {
  option.addEventListener("click", event => {
    if (!event.target.classList.contains("fa-solid")) {
      // Check if the clicked element has the 'fa-solid' class to ensure it's an option
      return;
    }
    
    playerChoice = event.target.id;
    hideSection(optionsSection);
    showSection(resultSection);
    playericon.className = icons[playerChoice];
    getComputerChoice();
    determineWinner();
  });
});

function getComputerChoice() {
  let array = ["rock", "paper", "scissors"];
  computerChoice = array[Math.floor(Math.random() * 3)];
  computericon.className = icons[computerChoice];
}

function determineWinner() {
  if (computericon.className === playericon.className) {
    winlose.textContent = "TIE";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    winlose.textContent = "YOU WON";
    playerCounter++;
  } else {
    winlose.textContent = "YOU LOST";
    computerCounter++;
  }
  updateScores();
}

function updateScores() {
  playerScoreElement.textContent = playerCounter;
  computerScoreElement.textContent = computerCounter;
}

playAgainbtn.onclick = () => {
  hideSection(resultSection);
  showSection(optionsSection);
};

function hideSection(element) {
  element.style.display = "none";
}

function showSection(element) {
  element.style.display = "flex";
}
