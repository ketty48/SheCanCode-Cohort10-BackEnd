const getUserChoice= userInput =>{
userInput=userInput.toLowerCase();
if(userInput==='rock' || userInput==='paper' || userInput==='scissors' || userInput==='bomb'){
    return userInput;
}else{
    console.log('error! enter rock, paper, or scissors.');
}
};
console.log(getUserChoice('paper')); // here we will get paper
console.log(getUserChoice('pen'));  //error, enter rock, paper, or scissors.,   undefined
const getComputerChoice=() =>{
   const randomNUmber= Math.floor(Math.random() * 3); 

    switch(randomNUmber){
        case 0:
            return 'rock';
            break;
            case 1:
                return 'paper';
                break;
                case 2:
                    return 'scissors';
                    break
                    default:
                        console.log('invalid');

    }
};
console.log(getComputerChoice()); //scissors
const determineWinner= (userChoice,computerChoice) =>{
   if(userChoice==='bomb'){
    return 'user won!';
   } 
    if(userChoice===computerChoice){
        return 'The game is a tie!';
    }
        if (userChoice === 'rock') {
            if (computerChoice === 'paper') {
              return 'The computer won!';
            } else {
              return 'The user won!';
            }
          }
          if (userChoice === 'paper') {
            if (computerChoice === 'scissors') {
              return 'The computer won!';
            } else {
              return 'The user won!';
            }
          }
          if (userChoice === 'scissors') {
            if (computerChoice === 'rock') {
              return 'The computer won!';
            } else {
              return 'The user won!';
            }
          }
          
        
};
console.log(determineWinner('paper', 'scissors')); // 'The computer won!'
console.log(determineWinner('paper', 'paper')); // 'The game is a tie!'
console.log(determineWinner('paper', 'rock'));//'The user won!'
const playGame=() =>{
    const userChoice=getUserChoice('bomb');
    const computerChoice=getComputerChoice();
    console.log('\nUser threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice,computerChoice));

};
playGame();