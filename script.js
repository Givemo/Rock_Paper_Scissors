let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_h2 = document.querySelector(".result > h2");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");



function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber].toUpperCase();
}


/*
function playRound(playerSelection, computerSelection) {
    if (computerSelection === "Scissors".toUpperCase()) {
        win(playerSelection, computerSelection)
    } else if(computerSelection === "Paper".toUpperCase()) {
        lose(playerSelection, computerSelection)
    } else {
        result_h2.innerHTML = `${playerSelection} equals ${computerSelection}. It's a Draw!`;
    }
}
*/
function game(playerSelection) {

    switch (playerSelection + computerSelection) {
        case"ROCKSCISSORS":
            "PAPERROCK":
            "SCISSORSPAPER":
            win(playerSelection ,computerSelection);
            break;
        case"SCISSORSROCK":
            "ROCKPAPER":
            "PAPERSCISSORS":
            lose(playerSelection ,computerSelection);
            break;
        case"ROCKROCK":
            "SCISSORSSCISSORS":
            "PAPERPAPER":
            result_h2.innerHTML = `${playerSelection} equals ${computerSelection}. It's a Draw!`;
            break;
    }
}

function win(playerSelection, computerSelection) {
    userScore++;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_h2.innerHTML = `${playerSelection}${smallUserWord} beats ${computerSelection}${smallCompWord}. You win!`;
    
}

function lose(playerSelection, computerSelection) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_h2.innerHTML = `${computerSelection}${smallCompWord} beats ${playerSelection}${smallUserWord}. You lose...`;

}


function main() {
    rock_div.addEventListener('click',function() {
        alert("rock")
    })

    paper_div.addEventListener('click',function() {
        alert("paper")
    })

    scissors_div.addEventListener('click',function() {
        alert("scissors")
    })
}
main();


/*
var playerSelection = prompt("Enter your choice").toLowerCase();
var computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
*/





/*function game() {
    const playerSelection = prompt("What is your choice");
    const computerSelection = computerPlay();
    switch (playerSelection + computerSelection) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            console.log("You win!!");
            break;
        case "ScissorsRock":
        case "RockPaper":
        case "PaperScissors":
            console.log("You lose!!");
            break;
        case "ScissorsScissors":
        case "RockRock":
        case "PaperPaper":
            console.log("It's a drawww");
            break;
    }
}
console.log(game());*/