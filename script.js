const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

// set date input minimum with todays date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

