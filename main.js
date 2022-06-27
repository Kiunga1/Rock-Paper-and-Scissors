function computerPlay () {
    const arrOffChoices =['rock','paper','scissors']
    const randomNum = Math.floor(Math.random()*3)
    const compChoice = arrOffChoices[randomNum]
    return compChoice
}
function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'rock'){
        return 'You tied! You both pcked rock'
    }else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
        return 'You tied! You both pcked scissors'
    }else if (playerSelection === 'paper' && computerSelection === 'paper'){
        return 'You tied! You both pcked paper'
    }else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        return 'You lost! Rock crushes scissors'
    }else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'You won! scissors cuts paper'
    }else if (playerSelection === 'rock' && computerSelection === 'paper'){
        return 'You lost! Paper covers rock'
    }else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'You won! Rock crushes scissors'
    }else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        return 'You lost! Scissors cuts paper'
    }else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return 'you won! Paper covers rock'
    }

    const playerSelection = 'rock';
    const computerSelection = computerPlay();

    console.log(playRound(playerSelection, computerSelection));
    
}