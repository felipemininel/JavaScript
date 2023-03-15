const display = document.querySelector('.display');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

let startTime;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 10);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay();
}

function updateTimer() {
  elapsedTime = Date.now() - startTime;
  updateDisplay();
}

function updateDisplay() {
  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime - minutes * 60000) / 1000);
  const milliseconds = elapsedTime % 1000;
  display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
