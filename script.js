function computerPlay() {
    let result = Math.floor(Math.random() * 3);
    if (result === 0) {
        console.log("It's rock")
        return "rock";
    }
    else if (result === 1) {
        console.log("It's paper");
        return "paper";
    }
    else {
        console.log("It's sicssors");
        return "scissors";
    }
    return result;
}

let humanNumber = 0;
let computerNumber = 0;
let tieNumber = 0;

function oneRound(playerSelection, computerSelection) {
    if (humanNumber === 5 || computerNumber === 5) {
        alert("The game is over");
    }
    else {
        if (playerSelection === computerSelection) {
            console.log("It's a tie!");
            tieNumber++;
            document.querySelector("#tieResult").textContent = `Number of ties: ${tieNumber}`;
    }
        else if (playerSelection === "scissors" && computerSelection === "paper" || playerSelection  === "paper" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "scissors") {
            humanNumber++;
            document.querySelector("#humanResult").textContent = `Your score is: ${humanNumber}`;
            if (humanNumber === 5) {
                alert("You win the game!");
                const restart = document.createElement("button");
                restart.textContent = "Play again!";
                document.body.appendChild(restart);
                restart.addEventListener("click", () => {
                    window.location.reload();
                })
            }
        }
        else {
            computerNumber++;
            document.querySelector("#computerResult").textContent = `Computer's score is: ${computerNumber}`;
            if (computerNumber === 5) {
                alert("The computer wins the game :-(");
                const restart = document.createElement("button");
                restart.textContent = "Play again!";
                document.body.appendChild(restart);
                restart.addEventListener("click", () => {
                    window.location.reload();
                })
            }
        }
    }
}    


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => 
        oneRound(button.id, computerPlay()));
});
