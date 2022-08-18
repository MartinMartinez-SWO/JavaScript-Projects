
const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    if(userInput === 'bomb'){
      return userInput;
    }
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
    
    }else{
      console.log('error');
    }
  };
  
  const getComputerChoice = () =>  {
    let random = Math.floor(Math.random()*3);
    switch(random){
      case 0: 
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2: 
        return 'scissors';
        break;
      default:
        return 'error';
        break;
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb'){
      return 'you win, cheater';
    }
  
    if (userChoice === computerChoice){
      return 'tie';
    }
  
    if (userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'the computer won';
      } else {
        return 'you won';
      }
    }
  
      if (userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'the computer won';
      } else {
        return 'you won';
      }
    }
  
      if (userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'the computer won';
      } else {
        return 'you won';
      }
    }
    }
  
  const playGame = () => {
    let userChoice = getUserChoice('bomb');
    let computerChoice = getComputerChoice();
    console.log('usaste ' + userChoice);
    console.log('el ordenador usó: ' + computerChoice);
    console.log( determineWinner(userChoice, computerChoice))
  }
  
  playGame();
  