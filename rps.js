function computerPlay() 
{
    let num = Math.floor(Math.random() * 3) + 1;

    if(num == 1) return "rock";
    else if (num == 2) return "paper";
    else return "scissors";
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock")
    {
        if (computerSelection == "scissors")
            return "You win! Rock beats scissors";
        
        else if (computerSelection == "paper")
            return "You lose! Paper beats rock."

        else 
            return "Tie! Rock equals rock.";
    }

    else if (playerSelection == "paper")
    {
        if(computerSelection == "rock")
            return "You win! Paper beats rock";
        
        else if (computerSelection == "scissors")
            return "You lose! Scissors beats paper."

        else 
            return "Tie! Paper equals paper.";
    }

    else if (playerSelection == "scissors")
    {
        if(computerSelection == "paper")
            return "You win! Scissors beats paper";
        
        else if (computerSelection == "rock")
            return "You lose! Rock beats scissors."

        else 
            return "Tie! Scissors equals scissors.";
    }
}

function game()
{
    let wins = 0, losses = 0;
    let result, input;

    for(let i = 0; i < 5; i++)
    {
        input = window.prompt("Rock, paper, or scissors:")
        result = playRound(input, computerPlay());

        if (result.includes("win"))
            wins++;

        else if (result.includes("lose"))
            losses++;

        console.log(result);
        console.log("Wins: " + wins);
        console.log("Losses: " + losses);
    }
}
game();