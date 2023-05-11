const time = document.querySelector('#time');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

let startTime;
let stopTime = 0;
let timeoutID;

startButton.disabled = false;
stopButton.disabled = true;
resetButton.disabled = true;


function display() {
    const currentTime = new Date(Date.now() - startTime + stopTime);
    const h = String(currentTime.getHours() - 9).padStart(2, '0');
    const m = String(currentTime.getMinutes()).padStart(2, '0');
    const s = String(currentTime.getSeconds()).padStart(2, '0');
    const ms = String(currentTime.getMilliseconds()).padStart(3, '0');

    time.textContent = `${h}:${m}:${s}.${ms}`
    timeoutID = setTimeout(display, 10);
}

startButton.addEventListener('click', () => {
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;

    startTime = Date.now();
    display();
});

stopButton.addEventListener('click', () => {
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;

    stopTime += (Date.now() - startTime);
    clearTimeout(timeoutID);
});

resetButton.addEventListener('click', () => {
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;

    stopTime = 0;
    time.textContent = '00:00:00.000';
});