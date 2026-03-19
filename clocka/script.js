let startTime;
let elapsed = 0;
let timerInterval;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const historyList = document.getElementById('history');

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function updateTimer() {
  const now = Date.now();
  const diff = elapsed + (now - startTime);
  timerDisplay.textContent = formatTime(diff);
}

startBtn.addEventListener('click', () => {
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 1000);
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  resetBtn.disabled = false;
});

pauseBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
  elapsed += Date.now() - startTime;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
});

resetBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
  if (elapsed > 0 || timerDisplay.textContent !== '00:00:00') {
    const li = document.createElement('li');
    li.textContent = `Session: ${timerDisplay.textContent}`;
    historyList.appendChild(li);
  }
  elapsed = 0;
  timerDisplay.textContent = '00:00:00';
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  resetBtn.disabled = true;
});
