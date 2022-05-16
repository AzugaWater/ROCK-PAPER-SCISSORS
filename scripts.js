
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
        tie ++;
        }
        else if (play(playerAnswer, computerAnswer) === true)
        {
            wins ++;
        }
        else
        {
        loses++;
        }
    }

    console.log("wins" + wins);
    console.log("Loses"+loses);
    console.log("tie" + tie);

}


   


game();