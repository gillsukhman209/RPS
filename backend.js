options = ["Rock", "Paper", "Scissors"]
console.log(computerPlay())

function computerPlay() {
    rm = parseInt(Math.floor(Math.random() * 3))
    return options[rm]
}