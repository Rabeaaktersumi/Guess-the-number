let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = Number(document.getElementById('guessInput').value);
  const message = document.getElementById('message');
  const attemptsDisplay = document.getElementById('attempts');
  attempts++;

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  if (guess === randomNumber) {
    message.textContent = `Correct! The number was ${randomNumber}.`;
    message.style.color = "green";
  } else if (guess < randomNumber) {
    message.textContent = "Too low! Try again.";
    message.style.color = "blue";
  } else {
    message.textContent = "Too high! Try again.";
    message.style.color = "red";
  }

  attemptsDisplay.textContent = `You guessed it in ${attempts} tries:`;
  attemptsDisplay.style.color = "red";
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('guessInput').value = '';
  document.getElementById('message').textContent = '';
  document.getElementById('attempts').textContent = '';
}