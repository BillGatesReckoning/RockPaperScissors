console.log("Hello world")

let humanScore = 0
let computerScore = 0
// Rock = 1 Paper = 2 Scissors = 3
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    let choice = 1
    if(randomNumber === 0) {
        choice = 2
    }
    else if(randomNumber === 1) {
        choice = 3
    }
    console.log(choice)
    return choice
}

function getHumanChoice() {
    let choice = ""
    choice = prompt("Play Rock, Paper or Scissors")
    console.log(choice)
    return choice
}

// Rock = 1 Paper = 2 Scissors = 3
function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`Tie!`)
    }
    else {
        if(humanChoice == 1) {
            switch (computerChoice) {
                case 2:
                    console.log(`Computer won. Paper beats rock.`)
                    computerScore++
                    break
                case 3:
                    console.log(`Human won. Rock beats scissors`)
                    humanScore++
                    break
            }
        }
        else if (humanChoice == 2) {
            switch (computerChoice) {
                case 1:
                    console.log(`Human won. Paper beats rock.`)
                    humanScore++
                    break
                case 3:
                    console.log(`Computer won. Scissors beat paper`)
                    computerScore++
                    break
            }
        }
        else {
            switch (computerChoice) {
                case 1:
                    console.log(`Computer won. Rock beats scissors.`)
                    computerScore++
                    break
                case 2:
                    console.log(`Human won. Scissors beat paper`)
                    humanScore++
                    break
            }
        }
    }
    return
}

console.log(playRound(getHumanChoice(), getComputerChoice()))