
function computerPlay()
{
    let comPlay = Math.floor(Math.random() * 3);
    
    if(comPlay == 0)
    {
        return ("rock");
    }
    else if (comPlay == 1)
    {
       return ("paper");
    }
    else 
    {
       return ("scissors");
    }
}




function play(playerAnswer, computerAnswer)
{
    if(playerAnswer === computerAnswer)
    {
        
       
        return "tie";
    }
    else if ( playerAnswer === "rock" && computerAnswer === "scissors" )
    {
       
        return true;
        
        
    }
    else if ( playerAnswer === "paper" && computerAnswer === "rock")
    {
        
        return true;
        
    } 
    else if ( playerAnswer === "scissors" && computerAnswer ==="paper")
    {
       
        return true;
        
        
    }
    else if ( computerAnswer === "rock" && playerAnswer === "scissors")
    {
        
        return false;
    }
    else if ( computerAnswer === "paper" && playerAnswer === "rock")
    {
       
        return false;
    }
    else if ( computerAnswer === "scissors" && playerAnswer === "paper")
    {
        
        return false;
    }
   
}

function game ()
{   
    let wins = 0;
    let loses = 0;
    let tie = 0;
     
    for ( let i = 0; i < 5; i++)
    {

        let playerSelection = prompt("Rock, Paper Or Scissors ?");
        let playerAnswer = playerSelection.toLowerCase();

        let computerAnswer = computerPlay();
    
        if (play(playerAnswer, computerAnswer) === "tie")
        {
        
        alert("Tie!");
        console.log("It'sa tie!");
        tie ++;
        }
        else if (play(playerAnswer, computerAnswer) === true)
        {
            alert("You win!");
            console.log("You won!");
            wins ++;
            

        }
        else
        {   alert("You lose!"); 
            console.log("You lost!");
            loses++;
        }
    }

    console.log("Wins:" + wins);
    console.log("Loses:"+loses);
    console.log("Tie:" + tie);
    if(wins > loses && wins > tie)
    {
        alert("You win!");
    }
    else if (loses > wins && loses > tie)
    {
        alert("You lose!");
    }
    else if ( tie > wins && tie > loses)
    {
        alert("It's a tie!");
    }

}


   


game();