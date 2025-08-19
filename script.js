let humanScore = 0;
let computerScore = 0;


function getComputerChoice()
{
    let optionMax = 3;
    randomVal = Math.floor(Math.random() * optionMax)
    switch (randomVal)
    {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
    //console.log(`Computer plays: ${randomVal}!`)

}

function getHumanChoice()
{
    // get the users input
    let userInput = prompt("Rock, Paper, Scissors, Shoot: ");
    return userInput;
    //console.log(`You play: ${userInput}!`)
}


function playRound(humanChoice, computerChoice) 
{
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) 
    {
        console.log(`It's a tie! You both chose ${humanChoice}.`);
    }
    
    else if ((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper"))
        {
            console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
            humanScore++;
        }
    else 
        {
            console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
            computerScore++;
        }    

}

// Play 5 Rounds
for (let i = 0; i < 5; i++)
{
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

console.log(`Final Score -> Human: ${humanScore}, Computer: ${computerScore}`);