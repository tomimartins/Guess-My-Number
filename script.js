'use strict';

let number = Math.trunc(Math.random() * 20 + 1);
let guess;
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = number;

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});

document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⛔️No number!';
      document.querySelector('body').style.backgroundColor = 'blue';
      score = 0;
    }
  } else if (guess === number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🎉Correct number!';
      document.querySelector('.highscore').textContent = score;
      document.querySelector('.number').textContent = number;
      document.querySelector('div').style.width = '30rem';
      document.querySelector('body').style.backgroundColor = 'rgb(96, 179, 71)';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      } else {
        document.querySelector('.highscore').textContent = highscore;
      }
      score = 0;
    }
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (score === 1) {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('body').style.backgroundColor = '#ec1b0d';
      score--;
      document.querySelector('.score').textContent = score;
      if (score >= highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = score;
      }
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (score === 1) {
      document.querySelector('.message').textContent = '💥You lost the game!';
      document.querySelector('body').style.backgroundColor = '#ec1b0d';
      score--;
      document.querySelector('.score').textContent = score;
      if (score >= highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = score;
      }
    }
  }
});
