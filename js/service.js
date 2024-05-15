function clock() {
    const hrs = document.getElementById('hrs');
    const min = document.getElementById('min');
    const sec = document.getElementById('sec');
    const ampm = document.getElementById('ampm');

    const date = new Date();
    hrs.innerText = (date.getHours() < 10 ? "0" : "") + date.getHours() % 12 || 12;
    min.innerText = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    sec.innerText = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
    ampm.innerText = date.getHours() >= 12 ? 'PM' : 'AM';

    const openclose = document.getElementById('openclose');
    if (date.getHours() >= 7 && date.getHours() < 18) {
        openclose.innerText = "OPENED";
    }
    else {
        openclose.innerText = "CLOSED";
    }

}
setInterval(clock, 1000);
clock();

const dayElement = document.getElementById('b-day');
const hourElement = document.getElementById('b-hour');
const minElement = document.getElementById('b-min');
const secElement = document.getElementById('b-sec');
function countdown() {
    const countDate = new Date('May 20, 2024 00:00:00').getTime();

    const now = new Date().getTime();
    const gap = countDate - now;

    const sec = 1000;
    const min = sec * 60;

    const hour = min * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMin = Math.floor((gap % hour) / min);
    const textSec = Math.floor((gap % min) / sec);

    dayElement.innerText = textDay;
    hourElement.innerText = textHour;
    minElement.innerText = textMin;
    secElement.innerText = textSec;


}
setInterval(countdown, 1000);
countdown();
