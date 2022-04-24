const container = document.querySelector(".container")
const buttons = document.querySelectorAll("button")

let score = 0;
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {

        let playerSelection;
        switch (e.target.id) {
            case "1":
                playerSelection = "Rock";
                break;
            case "2":
                playerSelection = "Paper";
                break;

            case "3":
                playerSelection = "Scissors";
                break;

        }
        let options = ["Rock", "Paper", "Scissors"]


        function computerPlay() {
            rm = parseInt(Math.floor(Math.random() * 3))
            return options[rm]
        }
        start(playerSelection, computerPlay())

        document.querySelector(".playerSelection").textContent = "You Picked: " + playerSelection;

    })
})


function start(playerSelection, computerSelection) {

    document.querySelector(".computerSelection").textContent = "Computer Picked: " + computerSelection

    if (computerSelection == "Rock") {

        if (playerSelection == "Scissors") {
            result("L")
        } else if (playerSelection == "Rock") {
            result("T")

        } else if (playerSelection == "Paper") {
            result("W")


        }

    }
    switch (playerSelection) {
        case "Rock":
            switch (computerSelection) {
                case "Rock":
                    result("T")
                    break;

                case "Paper":
                    result("L")
                    break;

                case "Scissors":
                    result("W")
                    break;

            }
            break;

        case "Paper":
            switch (computerSelection) {
                case "Rock":
                    result("W")
                    break;

                case "Paper":
                    result("T")
                    break;

                case "Scissors":
                    result("L")
                    break;

            }
            break;


        case "Scissors":
            switch (computerSelection) {
                case "Rock":
                    result("L")
                    break;

                case "Paper":
                    result("W")
                    break;

                case "Scissors":
                    result("T")
                    break;

            }
            break;

    }

}


function result(output) {

    switch (output) {
        case "W":

            container.style.cssText = "background: green;"

            score += 1;
            break;
        case "L":

            if (!score == 0) {
                score -= 1;

            }
            container.style.cssText = "background: red;"


            break;

        case "T":
            container.style.cssText = "background: gray;"
            break;


    }


    document.querySelector(".scoreCounter").textContent = "Score is " + String(score)
}