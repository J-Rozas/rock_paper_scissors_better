function computerPlay() {
    let result = Math.floor(Math.random() * 3);
    if (result === 0) {
        return `rock`;
    }
    else if (result === 1) {
        return `paper`;
    }
    else {
        return `scissors`;
    }
}

let humanNumber = 0;
let computerNumber = 0;
let tieNumber = 0;

function oneRound(playerSelection, computerSelection) {
    if (humanNumber === 5 || computerNumber === 5) {
        alert(`The game is over, the result is \nYOU: ${humanNumber}\nCOMPUTER: ${computerNumber}\nPress the "Play again!" button to play another 5 rounds game`);
    }
    else {
        if (playerSelection === computerSelection) {
            tieNumber++;
            document.querySelector(`#tieResult`).textContent = `Number of ties: ${tieNumber}`;
    }
        else if (playerSelection === `scissors` && computerSelection === `paper` || playerSelection  === `paper` && computerSelection === `rock` || playerSelection === `rock` && computerSelection === `scissors`) {
            humanNumber++;
            document.querySelector(`#humanResult`).textContent = `Your score is: ${humanNumber}`;
            if (humanNumber === 5) {
                alert(`You win the game!`);
                const restart = document.createElement(`button`);
                restart.textContent = `Play again!`;
                document.body.appendChild(restart);
                restart.addEventListener(`click`, () => {
                    window.location.reload();
                })
            }
        }
        else {
            computerNumber++;
            document.querySelector(`#computerResult`).textContent = `Computer's score is: ${computerNumber}`;
            if (computerNumber === 5) {
                alert(`The computer wins the game :-(`);
                const restart = document.createElement(`button`);
                restart.textContent = `Play again!`;
                document.body.appendChild(restart);
                restart.addEventListener(`click`, () => {
                    window.location.reload();
                })
            }
        }
    }
}    


const responsiveImgs = document.querySelectorAll('img');

responsiveImgs.forEach((img) => {
    img.addEventListener('click', () => 
        oneRound(img.id, computerPlay()));
});
