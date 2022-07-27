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
let time = { minutes: 0, seconds: 0 };
let initialMinutes = 0;
let initialSeconds;
let clockStateSeconds;
let clockRunning = false;


// /* View in fullscreen */
// function openFullscreen() {
//     if (elem.requestFullscreen) {
//         elem.requestFullscreen();
//     } else if (elem.webkitRequestFullscreen) { /* Safari */
//         elem.webkitRequestFullscreen();
//     } else if (elem.msRequestFullscreen) { /* IE11 */
//         elem.msRequestFullscreen();
//     }
// }

// /* Close fullscreen */
// function closeFullscreen() {
//     if (document.exitFullscreen) {
//         document.exitFullscreen();
//     } else if (document.webkitExitFullscreen) { /* Safari */
//         document.webkitExitFullscreen();
//     } else if (document.msExitFullscreen) { /* IE11 */
//         document.msExitFullscreen();
//     }
// }

function displayTime(seconds) {
    time.minutes = parseInt(seconds / 60);

    if (time.minutes < 10) { time.minutes = "0" + time.minutes; }
    if (time.seconds < 10) { time.seconds = "0" + time.seconds; }

    clock.innerText = time.minutes + ':' + time.seconds;

}




function setTimerClock(seconds) {
    stopTimer();
    console.log('set timer min:', time.minutes)
    console.log('set timer sec:', time.seconds);
    initialSeconds = seconds;
    time.seconds = seconds;
    console.log(time.seconds);
    time.minutes = parseInt(seconds / 60);
    btnStart[0].textContent = "Start";
    displayTime(seconds);

}

// šeit ir issue jo parreķina time.minutes pēc time.seconds = 60.
function deductSecond() {
    time.seconds--;
    console.log('initialsec in deduct:', initialSeconds);
    console.log('time.seconds in deduct:', time.seconds)
    console.log('minuts in deduct', time.minutes);

    displayTime(time.seconds);
    if (time.seconds === 0) { stopTimer() };
}



function runTimer() {
    if (clockRunning == false) {
        clockRunning = true;

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
    clockRunning = false;
    btnStart[0].textContent = "Resume";
}

btnMin1.addEventListener('click', (evt) => setTimerClock(60));
btnMin3.addEventListener('click', (evt) => setTimerClock(180));
btnMin5.addEventListener('click', (evt) => setTimerClock(300));
btnMin10.addEventListener('click', (evt) => setTimerClock(600));
btnMin15.addEventListener('click', (evt) => setTimerClock(900));
btnMin30.addEventListener('click', (evt) => setTimerClock(1800));
btnMin45.addEventListener('click', (evt) => setTimerClock(2700));
btnMin60.addEventListener('click', (evt) => setTimerClock(3600));

btnStart[0].addEventListener('click', runTimer);
btnReset[0].addEventListener('click', (evt) => setTimerClock(initialSeconds));
