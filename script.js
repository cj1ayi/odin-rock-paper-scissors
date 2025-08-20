let humanScore = 0;
let computerScore = 0;


function getComputerChoice()
{
    let optionMax = 3;
    randomVal = Math.floor(Math.random() * optionMax)
    let choice;
    switch (randomVal)
    {
        case 0: choice = "rock"; break;
        case 1: choice = "paper"; break;
        case 2: choice = "scissors"; break;
    }
    // Highlight the computer's choice
    document.querySelectorAll('.cpu-buttons button').forEach(btn => btn.style.backgroundColor = '#6c757d');
    document.querySelector(`#cpu-${choice}-btn`).style.backgroundColor = '#28a745';
    return choice;

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
        results.appendChild(tieResult);
        tieResult.textContent = `It's a tie! You both chose ${humanChoice}.`;
        tieResult.classList.add("tie-text"); 

    }
    
    else if ((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper"))
        {
            //console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
            const winResult = document.createElement("h3");
            winResult.classList.add("win-text"); 
            winResult.textContent = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
            results.appendChild(winResult);
            
            humanScore++;
        }
    else 
        {
            //console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
            const lostResult = document.createElement("h3");
            results.appendChild(lostResult);
            lostResult.textContent = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
            lostResult.classList.add("lose-text");
            
            
            computerScore++;
        }   
        runningScore.classList.add("score-text"); 
        runningScore.textContent = `Scores: Human - ${humanScore} \t Computer - ${computerScore}`;

}

// Play 5 Rounds

const score = document.querySelector(".score");
const runningScore = document.createElement("h2");
runningScore.classList.add("score-text");
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

