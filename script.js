console.log("Hello world")

let humanScore = 0
let computerScore = 0
const GAMEROUNDS = 5

const selectButtons = document.querySelector(".selectButtons");
const resultDiv = document.querySelector(".results");

selectButtons.addEventListener("click", (e) => {
    switch(e.target.id){
        case "rock":
            playRound(1, getComputerChoice());
            break;
        case "paper":
            playRound(2, getComputerChoice());
            break;
        case "scissors":
            playRound(3, getComputerChoice());
    }
})
// Rock = 1 Paper = 2 Scissors = 3
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    let choice = 1
    if(randomNumber === 0) {
        console.log("Paper")
        return 2
    }
    else if(randomNumber === 1) {
        console.log("Scissors")
        return 3
    }
    console.log("Rock")
    return choice
}

function getHumanChoice() {
    let choice = ""
    choice = prompt("Play Rock, Paper or Scissors")
    console.log(choice)
    switch (choice.toLowerCase()) {
        case "rock":
            return 1
        case "paper":
            return 2
        case "scissors":
            return 3
    }
    return 1
}

// Rock = 1 Paper = 2 Scissors = 3
function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        resultDiv.textContent = `Tie!`;
    }
    else {
        if(humanChoice == 1) {
            switch (computerChoice) {
                case 2:
                    resultDiv.textContent = `Computer won. Paper beats rock.`;
                    computerScore++
                    break
                case 3:
                    resultDiv.textContent = `Human won. Rock beats scissors.`;
                    humanScore++
                    break
            }
        }
        else if (humanChoice == 2) {
            switch (computerChoice) {
                case 1:
                    resultDiv.textContent = `Human won. Paper beats rock.`;
                    humanScore++
                    break
                case 3:
                    resultDiv.textContent = `Computer won. Scissors beat paper.`;
                    computerScore++
                    break
            }
        }
        else {
            switch (computerChoice) {
                case 1:
                    resultDiv.textContent = `Computer won. Rock beats scissors.`;
                    computerScore++
                    break
                case 2:
                    resultDiv.textContent = `Human won. Scissors beat paper.`;
                    humanScore++
                    break
            }
        }
    }
    return
}

/*function playGame() {
    for (let i = 0; i < GAMEROUNDS; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }
    if (humanScore === computerScore) {
        console.log(`It's a tie! Human got ${humanScore} points and computer got ${computerScore} points.`)
    }
    else if (humanScore > computerScore) {
        console.log(`Human won! Human got ${humanScore} points and computer got ${computerScore} points.`)
    }
    else {
        console.log(`Computer won! Human got ${humanScore} points and computer got ${computerScore} points.`)
    }
}*/