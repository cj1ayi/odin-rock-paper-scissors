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
    const results = document.querySelector(".results");

    if (humanChoice === computerChoice) 
    {
        //console.log(`It's a tie! You both chose ${humanChoice}.`);
        const tieResult = document.createElement("h3");
        tieResult.textContent = `It's a tie! You both chose ${humanChoice}.`;
        results.appendChild(tieResult);

    }
    
    else if ((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper"))
        {
            //console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
            const winResult = document.createElement("h3");
            winResult.textContent = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
            results.appendChild(winResult);
            
            humanScore++;
        }
    else 
        {
            //console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
            const lostResult = document.createElement("h3");
            lostResult.textContent = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
            results.appendChild(lostResult);
            computerScore++;
        }    
        runningScore.textContent = `Scores: Human - ${humanScore} \t Computer - ${computerScore}`;

}

// Play 5 Rounds

const score = document.querySelector(".score");
const runningScore = document.createElement("h2");
score.appendChild(runningScore);

//console.log(`Final Score -> Human: ${humanScore}, Computer: ${computerScore}`);


// UI Logic
// Rock
const rockBtn = document.querySelector("#rock-btn");
rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

// Paper
const paperBtn = document.querySelector("#paper-btn");
paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
})

// Scissors 
const scissorsBtn = document.querySelector("#scissors-btn");
scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
})

