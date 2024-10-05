
function getComputerChoice(){

    let choice = Math.floor(Math.random() * 3);

    if(choice==0){
        return "Rock";
    }
    else if(choice==1){
        return "Paper";
    }
    else return "Scissors"

}

function getHumanChoice(){

    let myChoice = prompt("what do you choose?");
    return myChoice;
}



function playGame(){

    // declaring the score variables

    let humanScore=0;
    let computerScore=0;


    //function to play the game for 1 round

    function playRound(humanChoice, computerChoice){

        humanChoice= humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1);

        //condition for winning/ updating scores based on wins
    
        if(humanChoice==="Rock"&& computerChoice==="Scissors" || humanChoice==="Scissors" && computerChoice==="Paper" || humanChoice==="Paper" && computerChoice==="Rock" ){
            humanScore++;
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    
    
        }
        else{
            computerScore++;

            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            
        }
    }

    
    // loop for playing game for 5 times
    for(let i=0;i<5;i++){
        const humanChoice=getHumanChoice();
        const computerChoice=getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    if(humanScore>computerScore){

        return "Human wins the game and has score of "+humanScore;
    }else{
        return "Computer wins the game and has score of "+ computerScore;
    }



    
}

console.log(playGame());




