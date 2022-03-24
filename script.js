var r = document.getElementById("r");
var btn = document.querySelector(".rock");
var rot = 1;

btn.addEventListener("click", function() {
  r.style = `transform: rotate(${rot}turn)`;
  rot += 1;
});

function computerPlay() {
    const rps = ['rock','paper','scissors'];
    rand_choice_idx = Math.floor(Math.random() * 3);
    return rps[rand_choice_idx];
}

function userPlay(){
    const users_choice = window.prompt('MAKE YOUR CHOICE! - ROCK, PAPER OR SCISSORS?: ');
    return users_choice.toLowerCase();
}

function checkWhoWon(user,computer,scoreBoard){
    if (user === computer){
        console.log('DRAW! Try Again!');
    }
    else if (user === 'rock' && computer === 'scissors'){
        console.log('Nice! ROCK beats SCISSORS!');
        updateScore(scoreBoard,"User");
    }
    else if (user === 'scissors' && computer === 'paper'){
        console.log('Alright! SCISSORS beat PAPER!');
        updateScore(scoreBoard, "User");
    }
    else if (user === 'paper' && computer === 'rock'){
        console.log('Splendid choice! PAPER beats ROCK!');
        updateScore(scoreBoard,"User");
    }
    else{
        console.log(`Oh no, try again next time! ${computer.toUpperCase()} beats ${user.toUpperCase()} :(`);
        updateScore(scoreBoard,"Computer");
    }

}

function usersInputIsValid(input){
    return (['rock','paper','scissors'].includes(input));
}

function updateScore(scoreBoard,who) {
    scoreBoard[who] += 1;
}

function declareTheChampion(scoreBoard){
    if (scoreBoard.Computer == 5){
        console.log("You Lose! Better luck next time.");
    }
    else{
        console.log("Congratulations! You are the Rock, Paper, Scissors champion!");
    }
}


const scoreBoard = {
User:0, 
Computer:0
};
console.log("Win 5 times to become the champ!");

while(scoreBoard.Computer < 5 && scoreBoard.User < 5){
    const computer = computerPlay();
    const user = userPlay();

    if(usersInputIsValid(user)){
        checkWhoWon(user,computer,scoreBoard);
        console.log(scoreBoard);
    }
    else{
        console.log('INVALID INPUT! Spelling error?')
    }
}
declareTheChampion(scoreBoard);

