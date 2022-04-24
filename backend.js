options = ["Rock", "Paper", "Scissors"]


function computerPlay() {
    rm = parseInt(Math.floor(Math.random() * 3))
    return options[rm]
}
playerSelection = parseInt(prompt("whats your choice: (1) Rock, (2) Paper, (3) Scissors"))

function start(playerSelection, computerSelection) {

    console.log("Computer selection is " + computerSelection)
    if (computerSelection == "Rock") {

        if (playerSelection == 3) {
            console.log("You lost")
        } else if (playerSelection == 1) {
            console.log("Tie")
        } else if (playerSelection == 2) {
            console.log("You won")
        }

    } else if (computerSelection == "Scissors") {
        if (playerSelection == 2) {
            console.log("You lost")

        } else if (playerSelection == 3) {
            console.log("Tie")

        } else if (playerSelection == 1) {
            console.log("You won")
        }
    } else if (computerSelection == "Paper") {
        if (playerSelection == 1) {
            console.log("You Lost")
        } else if (playerSelection == 2) {
            console.log("Tie")
        } else if (playerSelection == 3) {
            console.log("You won")
        }
    }
}

start(playerSelection, computerPlay())