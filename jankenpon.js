
const userScore_span = document.getElementById('user_score');
const computerScore_span = document.getElementById('computer_score');
const resultText_p = document.getElementById('result_text');
const roundResult_p = document.getElementById('round_result');
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
const computerPlays = document.getElementById("computerplay");
const userPlays = document.getElementById("userplay");

let userScore = 0;
let computerScore = 0;

rock_div.onclick = (e) => {
    let result = startGame('rock');
    result_text();
    resultStyle(result, rock_div);
};
paper_div.onclick = (e) => {
    let result = startGame('paper');
    result_text();
    resultStyle(result, paper_div);
};
scissor_div.onclick = (e) => {
    let result = startGame('scissor');
    result_text();
    resultStyle(result, scissor_div);
};
function computerChoice() {
    let choice = ['rock', 'paper', 'scissor']
    let computerChoice = Math.floor(Math.random() * 3);
    return choice[computerChoice];
}

function startGame(userChoice) {
    let compChoice = computerChoice();
    if (userChoice === compChoice) {
        let resultss = 'draw';
        resultText_p.textContent = 'it is a draw !';
        if (userChoice === 'rock' && compChoice === 'rock') {
            userPlays.innerHTML = '<img alt="rock" src="https://tejeshwer25.github.io/Rock_Paper_scissors/images/rock.png">';
            computerPlays.innerHTML = '<img alt="rock" src="https://tejeshwer25.github.io/Rock_Paper_scissors/images/rock.png">';
        } else if (userChoice === 'paper' && compChoice === 'paper') {
            userPlays.innerHTML = '<img alt="paper" src="https://tejeshwer25.github.io/Rock_Paper_scissors/images/paper.png">';
            computerPlays.innerHTML = '<img alt="paper" src="https://tejeshwer25.github.io/Rock_Paper_scissors/images/paper.png">';
        } else if (userChoice === 'scissor' && compChoice === 'scissor') {
            userPlays.innerHTML = '<img alt="scissor" src="https://tejeshwer25.github.io/Rock_Paper_scissors/images/scissor.png">';
            computerPlays.innerHTML = '<img alt="scissor" src="https://tejeshwer25.github.io/Rock_Paper_scissors/images/scissor.png">';
        }
        return 'draw';
    }
    else if ((userChoice === 'rock' && compChoice === 'scissor') ||
        (userChoice === 'scissor' && compChoice === 'paper') ||
        (userChoice === 'paper' && compChoice === 'rock')) {
        let resultss = 'win';
        userScore++;
        userScore_span.textContent = userScore;
        resultText_p.textContent = `Computer tried to block your ${userChoice} with ${compChoice} and failed... You win`;
        if (userChoice === 'rock' && compChoice === 'scissor') {
            userPlays.innerHTML = '<img alt="rock" src="https://tejeshwer25.github.io/Rock_Paper_scissors/images/rock.png">';
            computerPlays.innerHTML = '<img alt="scissor" src="https://tejeshwer25.github.io/Rock_Paper_scissors/images/scissor.png">';
        } else if (userChoice === 'paper' && compChoice === 'rock') {
            userPlays.innerHTML = '<img alt="paper" src="https://tejeshwer25.github.io/Rock_Paper_scissors/images/paper.png">';
            computerPlays.innerHTML = '<img alt="rock" src="https://tejeshwer25.github.io/Rock_Paper_scissors/images/rock.png">';
        } else if (userChoice === 'scissor' && compChoice === 'paper') {
            userPlays.innerHTML = '<img alt="scissor" src="https://tejeshwer25.github.io/Rock_Paper_scissors/images/scissor.png">';
            computerPlays.innerHTML = '<img alt="paper" src="https://tejeshwer25.github.io/Rock_Paper_scissors/images/paper.png">';
        }
        return 'win';
    }
    else if ((userChoice === 'rock' && compChoice === 'paper') ||
        (userChoice === 'scissor' && compChoice === 'rock') ||
        (userChoice === 'paper' && compChoice === 'scissor')) {
        let resultss = 'loss';
        computerScore++;
        computerScore_span.textContent = computerScore;
        resultText_p.textContent = `Computer blocked your ${userChoice} with ${compChoice} succefully... You lost`;
        if (userChoice === 'rock' && compChoice === 'paper') {
            userPlays.innerHTML = '<img alt="rock" src="https://tejeshwer25.github.io/Rock_Paper_scissors/images/rock.png">';
            computerPlays.innerHTML = '<img alt="paper" src="https://tejeshwer25.github.io/Rock_Paper_scissors/images/paper.png">';
        } else if (userChoice === 'paper' && compChoice === 'scissor') {
            userPlays.innerHTML = '<img alt="paper" src="https://tejeshwer25.github.io/Rock_Paper_scissors/images/paper.png">';
            computerPlays.innerHTML = '<img alt="scissor" src="https://tejeshwer25.github.io/Rock_Paper_scissors/images/scissor.png">';
        } else if (userChoice === 'scissor' && compChoice === 'rock') {
            userPlays.innerHTML = '<img alt="scissor" src="https://tejeshwer25.github.io/Rock_Paper_scissors/images/scissor.png">';
            computerPlays.innerHTML = '<img alt="rock" src="https://tejeshwer25.github.io/Rock_Paper_scissors/images/rock.png">';
        }
        return 'loss';
    }
}
function reset() {
    userScore = 0;
    computerScore = 0;
    userScore_span.textContent = '0';
    computerScore_span.textContent = '0';
}
function result_text() {
    if (userScore == 20) {
        resultText_p.textContent = 'you reached 20 first!! ';
        userScore = 0;
        computerScore = 0;
        userScore_span.textContent = '0';
        computerScore_span.textContent = '0';
    }
    if (computerScore == 20) {
        resultText_p.textContent = 'you could not reach 20 first';
        userScore = 0;
        computerScore = 0;
        userScore_span.textContent = '0';
        computerScore_span.textContent = '0';
    }
    setTimeout(() => { roundResult_p.textContent = '' }, 2000)
}
function resultStyle(result, e) {
    if (result === 'win') {
        e.classList.add('win');
        setTimeout(() => { e.classList.remove('win') }, 1000)
    } else if (result === 'draw') {
        e.classList.add('draw');
        setTimeout(() => { e.classList.remove('draw') }, 1000)
    } else {
        e.classList.add('lost');
        setTimeout(() => { e.classList.remove('lost') }, 1000)
    }
}
