const currentTimeDisplay = document.getElementById("current-time-display")
const alarmTimeDisplau = document.getElementById("alarm-time-display")
const alarmMessageDisplay = document.getElementById("alarm-message-display")
document.getElementById("set-alarm-button").addEventListener("click", setAlarm)
let currenTime = null
let alarmTime = null
const audio = new Audio('bella.mp3');

function renderCurrentTime() {
    const today = new Date();
    const now = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(now)
}
renderCurrentTime()

function setAlarm() {

}

function alarmChecker() {

}
alarmChecker()

function ringTheAlarm() {

}