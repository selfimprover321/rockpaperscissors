let humanScore = 0;
let computerScore = 0;
while((humanScore < 5) && (computerScore < 5)){
    const buttons = document.querySelectorAll("button");
    const results = document.querySelector("#results");
    buttons.forEach((button) =>{
        button.addEventListener("click", () =>
        {
            let userChoice = button.id;
            playRound(userChoice, getComputerChoice())
        });
    });
    function getComputerChoice(){
        let x = Math.floor(Math.random()*3);
        let options = ["rock", "paper", "scissors"];
        return options[x];
    }
    let playRound = function(humanChoice, computerChoice){ 
        if (humanChoice === computerChoice){
            results.textContent = `You both chose ${computerChoice}. This is a draw. The score is Computer: ${computerScore}, You: ${humanScore}`;
        }
        else if ((computerChoice === "rock" && humanChoice === "scissors") || (computerChoice === "paper" && x === "rock") || (computerChoice == "scissors" && x == "paper")){
            computerScore++
            results.textContent = `You chose ${humanChoice}, but the computer chose ${computerChoice}. This means that you lost this round. You won ${humanScore} rounds so far, compared to the ${computerScore} rounds of the computer.`
        }
        else{
            humanScore++
            results.textContent = `You win this round! You chose ${humanChoice} and the computer chose ${computerChoice}. You won ${humanScore} rounds so far, compared to the ${computerScore} rounds of the computer.`
        }
    }
}
if(humanScore > computerScore){
    results.textContent = `You Win! The score is ${humanScore} to ${computerScore}`;
        
}
else{
    results.textContent = `You Lose. You won ${humanScore}, which is less than ${computerScore}`;
}
