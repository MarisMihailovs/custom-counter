const startBtn = document.getElementById('start');
const elem = document.documentElement;
let state = startBtn.textContent;

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

function runTimer() {
    console.log(state);
    if (state === "start") {
        startBtn.textContent = "pause";
        state = "pause";
    } else {
        startBtn.textContent = "start";
        state = "start";
    }

}

startBtn.addEventListener('click', runTimer);


