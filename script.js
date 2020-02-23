
// fetching time from worldtimeapi.org.
let timeholder = document.getElementById('time');
function setTime() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://worldtimeapi.org/api/timezone/America/Toronto", true);
    xhr.onload = () => {
        let timearr = ((JSON.parse(xhr.response)).datetime).split("");
        let timehr = (timearr.slice(11, 13)).join("");
        let timemin = (timearr.slice(14, 16)).join("");
        timeholder.innerHTML = timehr + ":" + timemin;       
    }
    xhr.send();
    setTimeout(setTime, 30000); //solves below problem?
} //problem: time wouldnt update between loads as its a one time fetch thing. shoudl I set interval to update time? 



//fetching current temperature from openweathermap api
const OPEN_WEATHER_API_CALL = "http://api.openweathermap.org/data/2.5/weather?q=toronto&appid=890236356f7a8c5630730c0c67cb5b0f";
let weatherHolder = document.getElementById('weather');
function setWeather() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", OPEN_WEATHER_API_CALL, true);
    xhr.onload = () => {
        let torontoTemp = ((JSON.parse(xhr.response)).main.temp) - 273;
        weatherHolder.innerHTML = Math.round(torontoTemp) + "&#176 C";
    }
    xhr.send();
    
    setTimeout(setWeather, 120000); //to check for weather update evry two minute
}

//getting and setting weather and time
window.onload = setTime();
window.onload = setWeather();