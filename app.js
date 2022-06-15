

const hourText = document.getElementById('hour-text');
const minuteText = document.getElementById('minute-text');
const secondText = document.getElementById('second-text');
const slotText = document.getElementById('slot-text');
let hours;
let mins;
let seconds;

function getTimeEverySecond(){
    getTime();
    setInterval(getTime,1000);
}
getTimeEverySecond();

function getTime(){
    const date = new Date();
    let slottext = 'am';
    hours = date.getHours();
    mins = date.getMinutes();
    seconds = date.getSeconds();
    if(hours>12){
        hours = hours%12;
        slottext = 'pm'
    }
    setText(pad(hours),pad(mins),pad(seconds),slottext);
}

function setText(hour,minutes,seconds,slottext){
    hourText.innerText = hour;
    minuteText.innerText = minutes;
    secondText.innerText = seconds;
    slotText.innerText = slottext;
}
function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}
