const choices = ["rock", "paper", "scissors"];
const resultMessage = document.getElementById("result");

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        const result = determineWinner(userChoice, computerChoice);
        displayResult(result, userChoice, computerChoice);
    });
});

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function displayResult(result, userChoice, computerChoice) {
    resultMessage.innerHTML = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
}
