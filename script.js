
// fetching time from worldtimeapi.org.
let timeholder = document.getElementById('time');
function setTime() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://worldtimeapi.org/api/timezone/America/Toronto", true);
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
const OPEN_WEATHER_API_CALL = "https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=890236356f7a8c5630730c0c67cb5b0f";
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

//fetching notes and rendering them on screen.

let notes = [   //array of objects to store current notes
    {   
        title: 'first note',
        from: 'Misha',
        bodytext: 'Omg I love toronto so much you have no idea i went to yonge str and it was so good super amazing and my ftaher loved it too.',
        imgs: ''
    }, 
    {
        title: 'second note',
        from: 'Martha',
        bodytext: 'So I was puttig it off foreverLorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad non vero ipsa! Repellendus        asperiores est voluptatum provident beatae voluptates quod quibusdam delectus repudiandae maior cupiditate eligendi!',
        img: ''
    }
];

function renderNotes() {
    let noteWrapper = document.getElementById('notes-wrapper');
    let noteslist = '';

    notes.forEach((note) => {
        noteslist += `<div class="note-box">
                <p class="note-title">
                    ${note.title}
                </p>
                <p class="note-text">
                    ${note.bodytext}
                </p>
                <p class="note-from">
                    ${note.from}
                </p>
            </div>`
    });

    noteWrapper.innerHTML = noteslist;
}

//getting and setting weather and time when page loads
window.onload = setTime();
window.onload = setWeather();
window.onload = renderNotes();


