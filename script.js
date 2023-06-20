
const countdownForm = document.getElementById('countdownForm');


const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');

const timeElements = document.querySelectorAll('span');

const completeEl = document.getElementById('complete');
const completeElInfo = document.getElementById('complete-info');


let countdownTitle = '';
let countdownDate = '';
let countdownValue = new Date("Wed Oct 25 2023 09:00:00 GMT+0300 (Eastern European Summer Time)");
let countdownActive;


const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// set date input minimum with todays date
const today1 = new Date();
const today = new Date().toISOString().split('T')[0];


// populate countdown / complete ui
function updateDOM() {
    console.log(today1);
    console.log(countdownValue);
    countdownActive = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownValue - now;
        const days = Math.floor(distance / day);
        const hours = Math.floor((distance % day) / hour);
        const minutes = Math.floor((distance % hour) / minute);
        const seconds = Math.floor((distance % minute) / second);


        // show countdown
        // if countdown complete show complete

        if (distance < 0) {
            countdownEl.hidden = true;
            clearInterval(countdownActive);
            completeElInfo.textContent = `Control Room solutions day finished on ${countdownDate}`;
            completeEl.hidden = false;
        } else {
            // else show countdown in progress
            // populate countdown

            timeElements[0].textContent = `${days}`;
            timeElements[1].textContent = `${hours}`;
            timeElements[2].textContent = `${minutes}`;
            timeElements[3].textContent = `${seconds}`;
            completeEl.hidden = true;
            countdownEl.hidden = false;
        }
    }, second);
}



// onload, check localStorage
updateDOM();

