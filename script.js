console.log("Hello world")
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    let choice = "Paper"
    if(randomNumber === 0) {
        choice = "Rock"
    }
    else if(randomNumber === 1) {
        choice = "Scissors"
    }
    return choice
}

function getHumanChoice() {
    let choice = ""
    while(choice != "Rock" && choice != "Paper" && choice != "Scissors") {
        choice = prompt("Play Rock, Paper or Scissors")
    }
    return choice
}

console.log(getComputerChoice())
console.log(getHumanChoice())