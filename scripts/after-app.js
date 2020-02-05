// *Display Time =>
const currentTime = document.getElementById('current-time');
const currentDate = document.getElementById('current-date');
const currentDay = document.getElementById('current-day');
const currentTemperature = document.getElementById('current-temperature');

const timeApi =`http://worldtimeapi.org/api/timezone/Europe/Helsinki`;
const weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=%C3%A4%C3%A4nekoski&APPID=071656ebca0dd91cb744b42919983bb5`

let intervalTime = setInterval(time, 1000);

function time() {
    //Time
    let date = new Date();
    let time = `${date.getHours()}:${date.getMinutes()}`
  
    newDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    currentDate.innerHTML = newDate
    currentTime.innerHTML = time;
    
    if (date.getDay() == 2) {
        currentDay.innerHTML = 'Tuesday';
    } else if (date.getDay() == 3) {
        currentDay.innerHTML = 'Wednesday';
    } else if (date.getDay() == 4) {
        currentDay.innerHTML = 'Thursday';
    } else if (date.getDay() == 5) {
        currentDay.innerHTML = 'Friday';
    } else if (date.getDay() == 6) {
        currentDay.innerHTML = 'Saturday';
    } else if (date.getDay() == 7) {
        currentDay.innerHTML = 'Sunday';
    } else if (date.getDay() == 1) {
        currentDay.innerHTML = 'Monday';
    }
    // if (date.getMinutes() == 1 || 2 || 3 || 4 || 5 || 6) {
    //     '0' + date.getMinutes().slice(-2);
    // };
};


// *Display Weather =>

fetch(weatherApi)
.then(response => {
    return response.json();
}).then(response =>{
    console.log(response)
    const temperature = response.main.temp - 273.15;

    currentTemperature.innerHTML = temperature.toFixed(1) + '°C';


})


