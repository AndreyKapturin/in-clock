let timerId;

const startButton = document.getElementById('start');
startButton.addEventListener('click', startClock);

const stopButton = document.getElementById('stop');

function startClock() {
  timerId = setInterval(updateClock, 1000);
  startButton.removeEventListener('click', startClock);
  stopButton.addEventListener('click', stopClock);
}

function stopClock() {
  clearInterval(timerId);
  stopButton.removeEventListener('click', stopClock);
  startButton.addEventListener('click', startClock);
}

function updateClock() {
  const clock = document.getElementById('clock');
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  clock.textContent = addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);
}

function addZero(numberAsString) {
  let number = Number(numberAsString);
  return number < 10 ? `0${numberAsString}` : numberAsString;
}