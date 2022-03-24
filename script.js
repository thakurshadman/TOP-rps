function computerPlay() {
    const rps = ['rock', 'paper', 'scissors'];
    rand_choice_idx = Math.floor(Math.random() * 3);
    return rps[rand_choice_idx];
}

function userPlay(button) {
    return button.id;
}

function checkWhoWon(user, computer, scoreBoard) {
    if (user === computer) {
        return 'DRAW!';
    }
    else if (user === 'rock' && computer === 'scissors') {
        updateScore(scoreBoard, "User");
        return('Nice! ROCK beats SCISSORS!');
    }
    else if (user === 'scissors' && computer === 'paper') {
        updateScore(scoreBoard, "User");
        return('Alright! SCISSORS beat PAPER!');
    }
    else if (user === 'paper' && computer === 'rock') {
        updateScore(scoreBoard, "User");
        return('Splendid choice! PAPER beats ROCK!');
    }
    else {
        updateScore(scoreBoard, "Computer");
        return(`Oh no, try again next time! ${computer.toUpperCase()} beats ${user.toUpperCase()} :(`);
    }

}

function usersInputIsValid(input) {
    return (['rock', 'paper', 'scissors'].includes(input));
}

function updateScore(scoreBoard, who) {
    scoreBoard[who] += 1;
}

function declareTheChampion(scoreBoard) {
    if (scoreBoard.Computer == 5) {
        console.log("You Lose! Better luck next time.");
    }
    else {
        console.log("Congratulations! You are the Rock, Paper, Scissors champion!");
    }
}

var rot = 1;
const scale = 1;

const btns = document.querySelectorAll('.btn')
const userChoiceImage = document.getElementById('user');
const comChoiceImage = document.getElementById('com');
const remarkLabel = document.querySelector('#choice-remarks h4');
const userScoreLabel = document.getElementById('usr-score');
const comScoreLabel = document.getElementById('com-score');

const scoreBoard = {
    User: 0,
    Computer: 0
};

btns.forEach((btn) => {
    btn.addEventListener("mousedown", function () {
        btn.parentElement.style = `transform: rotate(${rot}turn) scale(${scale + .3})`;
        rot += 1;
    });
    
    btn.addEventListener("mouseup", function(){
        btn.parentElement.style = `transform: rotate(${rot}turn) scale(${scale})`;
        const user = userPlay(btn);
        const com = computerPlay();
        userChoiceImage.style.backgroundImage = `url('assets/${user}.png')`
        comChoiceImage.style.backgroundImage = `url('assets/${com}.png')`
        remark = checkWhoWon(user,com,scoreBoard);
        remarkLabel.textContent = remark;
        userScoreLabel.textContent = `USR: ${scoreBoard['User']}`;
        comScoreLabel.textContent = `COM: ${scoreBoard['Computer']}`;
    });
});


