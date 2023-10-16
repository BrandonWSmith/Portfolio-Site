let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (number1, number2) => Math.abs(number1 - number2);

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  if (humanGuess < 0 || humanGuess > 9) {
    window.alert('Guess a number between 0 and 9');
    end;
  }

  return getAbsoluteDistance(humanGuess, targetNumber) <= getAbsoluteDistance(computerGuess, targetNumber);
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore ++;
  }
  else if (winner === 'computer') {
    computerScore ++;
  }
}

const advanceRound = () => currentRoundNumber ++;