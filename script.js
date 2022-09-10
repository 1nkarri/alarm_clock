const currentTimeDisplay = document.getElementById("current-time-display")
const alarmTimeDisplay = document.getElementById("alarm-time-display")
const alarmMessageDisplay = document.getElementById("alarm-message-display")
document.getElementById("set-alarm-button").addEventListener("click", setAlarm)
let currenTime = null
let alarmTime = null
const audio = new Audio('ring-super-mario-bros.mp3');

function renderCurrentTime() {
    setInterval(() => {
        currenTime = new Date().toLocaleTimeString();
        currentTimeDisplay.textContent = currenTime;
        alarmChecker()
    }, 1000)
}
renderCurrentTime()

function setAlarm() {
    event.preventDefault()
    let wakeyHours = document.getElementById("hours-input").value
    let wakeyMins = document.getElementById("minutes-input").value

    if(wakeyMins / 10 < 1) {
        wakeyMins = "0" + wakeyMins
    }
    if(wakeyHours / 10 < 1) {
        wakeyHours = "0" + wakeyHours
    }

    alarmTime = `${wakeyHours}:${wakeyMins}:00`
    alarmTimeDisplay.textContent = alarmTime
}

function alarmChecker() {
    if (alarmTime === currentTime) {
        ringTheAlarm()
    }
}

function ringTheAlarm() {
    audio.play()
    alarmMessageDisplay.textContent = 'Get Up!!!'
}

function stopAlarm() {
    audio.stop()
    alarmMessageDisplay.textContent = ""
}