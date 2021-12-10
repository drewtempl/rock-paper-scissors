const userScore = document.querySelector('.user-score');
const compScore = document.querySelector('.comp-score');
let userWins = 0, compWins = 0;

function computerPlay() {
    let num = Math.floor(Math.random() * 3) + 1;

    if (num == 1) return "rock";
    else if (num == 2) return "paper";
    else return "scissors";
}

function playRound(playerSelection, computerSelection) {
    const result = document.querySelector('.result');

    if (playerSelection == "rock") {
        if (computerSelection == "scissors"){
            result.textContent = "You win! Rock beats scissors";
            userWins++;
        }
            

        else if (computerSelection == "paper"){
            result.textContent = "You lose! Paper beats rock."
            compWins++;
        }
    
        else
        result.textContent = "Tie! Rock equals rock.";
    }

    else if (playerSelection == "paper") {
        if (computerSelection == "rock"){
            result.textContent = "You win! Paper beats rock";
            userWins++;
        }
        
        else if (computerSelection == "scissors"){
            result.textContent = "You lose! Scissors beats paper."
            compWins++;
        }

        else {
            result.textContent = "Tie! Paper equals paper.";
        }
    }

    else if (playerSelection == "scissors") {
        if (computerSelection == "paper"){
            result.textContent = "You win! Scissors beats paper";
            userWins++;
        }  
            

        else if (computerSelection == "rock"){
            compWins++;
            result.textContent = "You lose! Rock beats scissors."
        }              

        else 
            result.textContent = "Tie! Scissors equals scissors.";
    }

    userScore.textContent = `You: ${userWins}`;
    compScore.textContent = `Computer: ${compWins}`;

    if(userWins == 5)
        result.textContent = "Game over. You Win!"

    else if (compWins == 5)
        result.textContent = "Game over. You Lost!"

}

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

rockBtn.addEventListener('click', () => {
    playRound("rock", computerPlay());
});

paperBtn.addEventListener('click', () => {
    playRound("paper", computerPlay());
});

scissorsBtn.addEventListener('click', () => {
    playRound("scissors", computerPlay());
});