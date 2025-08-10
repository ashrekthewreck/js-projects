let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

function computerMove() {
    let ranNum = Math.random();
    let computerMove = '';
    if(ranNum > 0 && ranNum < 1/3){
        computerMove = 'rock';
    } else if(ranNum >= 1/3 && ranNum < 2/3){
        computerMove = 'paper';
    } else if(ranNum >= 2/3 && ranNum < 1){
        computerMove = 'scissors';
    }

    return computerMove;
}

function playGame(playerMove){
    const compMove = computerMove(); // ✅ use a different name
    let result = '';

    if(playerMove === 'rock'){
        if(compMove === 'scissors'){
            result = 'You win.';
            score.wins += 1;
        } else if(compMove === 'paper'){
            result = 'You lose.';
            score.losses += 1;
        } else {
            result = 'It is a tie!';
            score.ties += 1;
        }  
    }

    if(playerMove === 'paper'){
        if(compMove === 'rock'){
            result = 'You win!';
            score.wins += 1;
        } else if(compMove === 'scissors'){
            result = 'You lose.';
            score.losses += 1;
        } else {
            result = 'It is a tie!';
            score.ties += 1;
        }  
    }

    if(playerMove === 'scissors'){
        if(compMove === 'paper'){
            result = 'You win.';
            score.wins += 1;
        } else if(compMove === 'rock'){
            result = 'You lose.';
            score.losses += 1;
        } else {
            result = 'It is a tie!';
            score.ties += 1;
        }  
    }

    
    
     document.querySelector('.js-moves').innerHTML = `You      
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${compMove}-emoji.png" class="move-icon">
Computer`;

    document.querySelector(".js-result").innerHTML = result;

    updateScoreElement();

   
 localStorage.setItem('score', JSON.stringify(score));
}

function updateScoreElement(){
    document.querySelector(".js-score").
    innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
} 