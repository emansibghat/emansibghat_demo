// Get DOM elements
const currentTimeElement = document.getElementById('current-time');
const alarmTimeInput = document.getElementById('alarm-time');
const setAlarmButton = document.getElementById('set-alarm-btn');
const stopAlarmButton = document.getElementById('stop-alarm-btn');
const alarmSound = document.getElementById('alarm-sound');

let alarmTime = null;
let alarmTimeout = null;

// Function to update current time
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    currentTimeElement.textContent = `${hours}:${minutes}:${seconds}`;

    // Check if alarm should go off
    if (alarmTime === `${hours}:${minutes}` && !alarmSound.paused) {
        startAlarm();
    }
}

// Update time every second
setInterval(updateTime, 1000);

// Function to start the alarm
function startAlarm() {
    alarmSound.play();
    stopAlarmButton.style.display = 'inline-block';
    setAlarmButton.style.display = 'none';
}

// Function to stop the alarm
function stopAlarm() {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    stopAlarmButton.style.display = 'none';
    setAlarmButton.style.display = 'inline-block';
    alarmTime = null;
}

// Set alarm function
function setAlarm() {
    alarmTime = alarmTimeInput.value;
    if (alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(current.toDateString() + ' ' + alarmTime);
        
        // Clear any existing alarm
        if (alarmTimeout) {
            clearTimeout(alarmTimeout);
        }
        
        // Set new alarm
        const timeUntilAlarm = timeToAlarm - current;
        if (timeUntilAlarm > 0) {
            alarmTimeout = setTimeout(startAlarm, timeUntilAlarm);
            alert(`Alarm set for ${alarmTime}`);
        }
    }
}

// Event listeners
setAlarmButton.addEventListener('click', setAlarm);
stopAlarmButton.addEventListener('click', stopAlarm);