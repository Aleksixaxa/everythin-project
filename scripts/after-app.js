// *Display Time =>
const currentTime = document.getElementById('current-time');
const currentDate = document.getElementById('current-date');
const currentDay = document.getElementById('current-day');
const currentTemperature = document.getElementById('current-temperature');
const examDay = document.getElementById('exam-day')

const timeApi =`http://worldtimeapi.org/api/timezone/Europe/Helsinki`;
const weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=%C3%A4%C3%A4nekoski&APPID=071656ebca0dd91cb744b42919983bb5`

let intervalTime = setInterval(time, 1000);

function time() {
    //Time
    let date = new Date();
    let time = `${date.getHours()}:${date.getMinutes()}`;
    let untilWeekend = document.querySelector('#weekend-day');

    newDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    currentDate.innerHTML = newDate
    currentTime.innerHTML = time;
    
    if (date.getDay() == 2) {
        currentDay.innerHTML = 'Tuesday';
        untilWeekend.innerHTML = 3; // days until weekend
    } else if (date.getDay() == 3) {
        currentDay.innerHTML = 'Wednesday';
        untilWeekend.innerHTML = 2; // days until weekend
    } else if (date.getDay() == 4) {
        currentDay.innerHTML = 'Thursday';
        untilWeekend.innerHTML = 1; // days until weekend
    } else if (date.getDay() == 5) {
        currentDay.innerHTML = 'Friday';
        untilWeekend.innerHTML = 'zeroo';// days until weekend
    } else if (date.getDay() == 6) {
        currentDay.innerHTML = 'Saturday';
        untilWeekend.innerHTML = 'zerooo';// days until weekend
    } else if (date.getDay() == 0) {
        currentDay.innerHTML = 'Sunday';
        untilWeekend.innerHTML = 'zeeeerro';// days until weekend
    } else if (date.getDay() == 1) {
        currentDay.innerHTML = 'Monday';
        untilWeekend.innerHTML = '4...';// days until weekend
    }

    // ?clock shows xx.1 not xx.01
//     if (date.getMinutes() == 4) {
//         '0' + date.getMinutes()
//     };
//     console.log(date.getMinutes())
};


// *Display Weather =>

fetch(weatherApi)
.then(response => {
    return response.json();
}).then(response =>{
    console.log(response)
    const temperature = response.main.temp - 273.15;

    currentTemperature.innerHTML = temperature.toFixed(1) + '°C';
});
// *Next Exam =>
//starting the whole shit
setInterval( () => {
    let countDownDate  = new Date("Feb 12, 2020").getTime();
    let now = new Date().getTime();
    let untilExam = countDownDate - now;
    let days = Math.floor(untilExam / (1000 * 60 * 60 * 24));
    let nextExam = document.querySelector('#next-exam');
    //displaying days until 
    examDay.innerHTML = days + 1;
   
    if (days == -1) {
        nextExam.innerHTML = 'You have an exam today!';
    } else if(days == 0 ) {
        nextExam.innerHTML = 'You have an exam tomorrow!';
    } else if (days <= -2) {
        nextExam.innerHTML = 'Change another exam deadline';
    };
}, 1000);//1sec refresh on time

setInterval( () => {
    let countDownDate = new Date("Feb 13, 2020 14:50:00").getTime();
    let now = new Date().getTime();
    let untilWeSee = countDownDate - now;
    
    let days = Math.floor(untilWeSee / (1000 * 60 * 60 * 24));
    let hours = Math.floor((untilWeSee % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((untilWeSee % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((untilWeSee % (1000 * 60)) / 1000);
    
    let weSee = document.querySelector('.until-we-see');
    let x = `${days * 24 + hours}h ${minutes}m ${seconds}s until we see again!`;
    weSee.innerHTML = x;

}, 1000);



