const clock = document.querySelector('.clock');
const clockMinutes = document.querySelector('#minutes');
const clockSeconds = document.querySelector('#seconds');
const btnMin1 = document.getElementById('1min');
const btnMin3 = document.getElementById('3min');
const btnMin5 = document.getElementById('5min');
const btnMin10 = document.getElementById('10min');
const btnMin15 = document.getElementById('15min');
const btnMin30 = document.getElementById('30min');
const btnMin45 = document.getElementById('45min');
const btnMin60 = document.getElementById('60min');
const btnStart = document.getElementsByClassName('start');
const btnReset = document.getElementsByClassName('reset');


const elem = document.documentElement;
let time = { minutes: 0, seconds: 0 }; /* updating spans and storing total min and sec */
let oneMinute = 60; /** serving as counter for min*/
let initialSeconds; /** storing total sec and serving to reset */
let decreaseSeconds; /** variable to store setInterval id and stopTimer */
let timerWarning; /** variable to store setInterval id and clear blinking text */

function stopTimer(timer) {

    clearInterval(timer);

}

function warning() {

    timerWarning = setInterval(() => {
        clock.classList.toggle('blinktext');
    }, 1000);

}

function updateClock() {

    clockSeconds.textContent = oneMinute;
    clockMinutes.textContent = time.minutes;

    if (oneMinute === 0 && time.seconds === 0) {

        clockMinutes.textContent = "00";
        clockSeconds.textContent = "00";
        warning();
    }

    if (oneMinute === 60) {
        clockSeconds.textContent = "00";
    }

    if (oneMinute < 10) {
        clockSeconds.textContent = "0" + oneMinute;
    }

    if (time.minutes < 10) {
        clockMinutes.textContent = "0" + time.minutes;
    }

}

function deductMinutes() {

    if (oneMinute === 0 || oneMinute === 60) { time.minutes--; }

}

function deductSeconds() {
    deductMinutes();

    decreaseSeconds = setInterval(function () {

        time.seconds--;
        oneMinute--;

        updateClock();

        deductMinutes();
        if (oneMinute === 0) { oneMinute = 60; }
        if (time.seconds === 0) {
            oneMinute = 0;
            stopTimer(decreaseSeconds);
        }
        if (time.seconds !== 0) {
            btnStart[0].disabled = true;
        }
    }, 1000)
}

function setTimerClock(sec) {
    stopTimer(decreaseSeconds);
    clearInterval(timerWarning);
    btnStart[0].classList.remove('inactive');
    btnReset[0].classList.add('inactive');
    btnStart[0].disabled = false;
    btnReset[0].disabled = true;

    initialSeconds = sec;
    oneMinute = 60;
    time.minutes = sec / 60;
    time.seconds = sec;
    updateClock();
}

function changeState(btn1, btn2) {
    btn1.classList.toggle('inactive');
    btn2.classList.toggle('inactive');
    btn2.disabled = false;
}

btnMin1.addEventListener('click', () => setTimerClock(60));
btnMin3.addEventListener('click', () => setTimerClock(180));
btnMin5.addEventListener('click', () => setTimerClock(300));
btnMin10.addEventListener('click', () => setTimerClock(600));
btnMin15.addEventListener('click', () => setTimerClock(900));
btnMin30.addEventListener('click', () => setTimerClock(1800));
btnMin45.addEventListener('click', () => setTimerClock(2700));
btnMin60.addEventListener('click', () => setTimerClock(3600));

// calling to run or resetting timer
btnStart[0].addEventListener('click', () => { changeState(btnStart[0], btnReset[0]), deductSeconds() });
btnReset[0].addEventListener('click', () => setTimerClock(initialSeconds));

document.getElementById("startBtn").onclick = function () {
    //disable
    this.disabled = true;

    //do some validation stuff
}