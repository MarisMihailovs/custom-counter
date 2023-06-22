
const clock = document.querySelector('.counter');
const regBtn = document.querySelector('.Register');

const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');

const timeElements = document.querySelectorAll('span');
const timeElementsBtn = document.querySelector('add-to-calendar-button');

const completeEl = document.getElementById('complete');
const completeElInfo = document.querySelector('.complete-title');

let countdownDate = '';
let countdownValue = new Date("Wed OCT 25 2023 09:30:00 GMT+0300 (Eastern European Summer Time)");
let countdownActive;


const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// set date input minimum with todays date
const today1 = new Date();
const today = new Date().toISOString().split('T')[0];

function showModal() {
    modal.classList.add('show-modal');
}

function removeModal(e) {
    if (e.target == modal) {
        modal.classList.remove('show-modal');
    };
}

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
            clock.style.display = "none";
            timeElementsBtn.style.display = "none";
            regBtn.style.display = "none";
            completeElInfo.textContent = `Event has started!`;
            completeEl.hidden = false;
        } else {
            // else show countdown in progress
            // populate countdown

            timeElements[0].textContent = `${days}`;
            timeElements[1].textContent = `${hours}`;
            timeElements[2].textContent = `${minutes}`;
            timeElements[3].textContent = `${seconds}`;
            completeEl.hidden = true;

        }
    }, second);
}

regBtn.addEventListener('click', showModal);
window.addEventListener('click', removeModal);
// onload
updateDOM();

