const clock = document.getElementById('clock');
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
const time = { minutes: 0, seconds: 0 };
let initialMinutes;
let clockStateSeconds;
let clockRunning = false;


/* View in fullscreen */
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

/* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}

function setTimerClock(timerValue) {
    stopTimer();
    initialMinutes = timerValue;
    btnStart[0].textContent = "Start";
    time.minutes = timerValue;
    time.seconds = 60;
    if (time.minutes > 5) {
        clock.textContent = time.minutes + ':00';
    } else {
        clock.textContent = '0' + time.minutes + ':00';
    }
}


function deductSecond() {
    if (time.seconds < 60) {
        time.seconds--;
        clock.textContent = time.minutes + ":" + time.seconds;
    } else {
        time.minutes--;
        time.seconds--;
        clock.textContent = time.minutes + ":" + time.seconds;
    }
}


function runTimer() {
    if (clockRunning == false) {
        clockRunning = true;
        console.log(time.minutes, time.seconds)
        btnStart[0].textContent = "Pause";
        if (!clockStateSeconds) {
            clockStateSeconds = setInterval(deductSecond, 1000);
        }
    } else {
        stopTimer()
        btnStart[0].textContent = "Resume";
        clockRunning = false;

    }

}


function stopTimer() {
    clearInterval(clockStateSeconds);
    clockStateSeconds = null;
    btnStart[0].textContent = "Resume";
}

btnMin1.addEventListener('click', (evt) => setTimerClock(1));
btnMin3.addEventListener('click', (evt) => setTimerClock(3));
btnMin5.addEventListener('click', (evt) => setTimerClock(5));
btnMin10.addEventListener('click', (evt) => setTimerClock(10));
btnMin15.addEventListener('click', (evt) => setTimerClock(15));
btnMin30.addEventListener('click', (evt) => setTimerClock(30));
btnMin45.addEventListener('click', (evt) => setTimerClock(45));
btnMin60.addEventListener('click', (evt) => setTimerClock(60));

btnStart[0].addEventListener('click', runTimer);
btnReset[0].addEventListener('click', (evt) => setTimerClock(initialMinutes));
