function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let timerId = null;

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
console.log(btnStart, btnStop);

btnStart.addEventListener('click', onBtnStartClick);
btnStop.addEventListener('click', onBtnStopClick);

function onBtnStartClick() {
  timerId = setInterval(
    () => (document.body.style.backgroundColor = getRandomHexColor()),
    1000
  );

  btnStart.setAttribute('disabled', true);
  btnStop.removeAttribute('disabled');
}

function onBtnStopClick() {
  btnStop.setAttribute('disabled', true);
  btnStart.removeAttribute('disabled', false);

  clearInterval(timerId);
}
