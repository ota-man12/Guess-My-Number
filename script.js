let score = 20;
let highScore = 0;
let secretNumber = Math.floor(Math.random() * 20) + 1;

//* Function to display message
const displayMessageSideMessage = (message) => {
  document.querySelector('.message').textContent = message;
};
const displayMessageTopMessage = (message) => {
  document.querySelector('.myNumber').textContent = message;
};

//*Adding a eventing to the check btn
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //* When theres no guess entered
  if (!guess) {
    displayMessageSideMessage('⛔️ No number Entered!');
  }
  //* When the is not between 0 and 20
  else if (guess > 20 || guess < 0) {
    displayMessageSideMessage('🤧 Please Enter a guess between 0 and 20!');
  }

  //* When the guess is correct
  else if (guess === secretNumber) {
    displayMessageSideMessage('🥳 Correct Number 🥳');
    displayMessageTopMessage('🎉YOU WON!!!🎉');
    document.querySelector('.number').textContent = secretNumber;

    //* Adding CSS when you win
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '35rem';
    document.querySelector('.number').style.borderRadius = '10px';

    //* Adding the highScore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //* When guess is wrong
  } else if (guess !== secretNumber) {
    //* When score reaches zero
    if (score > 1) {
      displayMessageSideMessage(
        //* Using ternary operator
        guess > secretNumber
          ? '⬆️ Guess is too high try again'
          : '⬇️ Guess is too low try again'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessageSideMessage('👎🏼 YOU LOST THE GAME');
      displayMessageTopMessage('😭YOU LOST😭');
      document.querySelector('.score').textContent = 0;

      //* Adding CSS when you loss
      document.querySelector('body').style.backgroundColor = '#f60000';
    }
  }
});

//* Restart the game btn
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  displayMessageSideMessage('🤔 Start guessing...');
  displayMessageTopMessage('Guess My Number!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  //* Adding CSS when resting the game
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.borderRadius = '0px';
});
