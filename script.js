
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
        title: 'Toronto is the best',
        from: 'dynamitehacker',
        bodytext: 'I grew up in a suburb of Toronto, then moved to Waterloo, Montreal, Calgary, and then back to Toronto, but downtown this time. Ive also visited plenty of cities in North America and Europe.I live here because I consider it to be the best place to live in North America.',
        imgs: ''
    },
    {
        title: 'Good outdoor space',
        from: 'jeffprobst',
        bodytext: 'I would actually say there is a reasonable amount of outdoor space for a big urban city. You have the whole done valley system as well as high park and the waterfront. If you go out of downtown a bit further you have rouge park, which is pretty big as well.',
        imgs: ''
    },
    {
        title: 'Rush hour sucks',
        from: 'Astramar',
        bodytext: 'During rush hour people on the TTC arent at their best, but to be honest, I m not either when I just got out of class and have been standing all day Im not cheerful to be stuck on a crowded subway car.',
        imgs: ''
    },
    {
        title: 'Love living in Toronto',
        from: 'Apostrotastrophe',
        bodytext: 'I moved here from Hamilton about a year and a half ago, and even now I have days where I get off the streetcar and think "this is where I live" with a crazy sense of awe. I \'m right at College and Bathurst, "Little Italy", and it\'s my favourite area in the whole city - I lucked out so hard getting this place.',
        imgs: ''
    },
    {
        title: 'Hmm, not sure.',
        from: 'Unknown',
        bodytext: 'It really depends on what you like to do and what your pace of life is. Personally, I hate the city. Not Toronto, but I mean city. I do not like hustle and bustle. I don\'t like built - up places.I like trees and fields and open spaces.I like quiet and slow.',
        imgs: ''
    },
    {
        title: 'Best of everything',
        from: 'Frostbite',
        bodytext: 'I love Toronto but it also lacks alot of the old big city charm that exists in a lot of the older large us cities, and of course most places in Europe. That being said its a great city but where ever you live its all about what you make of it.',
        imgs: ''
    },
    {
        title: 'Toronto is home',
        from: 'Someone',
        bodytext: 'I have lived here since I was 10 years old, so yes, I love the hell out of this city, and the province that it is located in. The best thing about Toronto is the ever visible multiculturalism (China Town, Greek Town, Korea Town, Little Italy, etc), booming entertainment district, great access to public transportation, the schools, and so on.',
        imgs: ''
    },
    {
        title: 'Love this place!',
        from: 'Noname',
        bodytext: 'I could choose to live anywhere in the world, and I choose to live in Toronto. Sure, it\'s not perfect - but where could be ? It \'s got the ideal mix of culture, food, attractions, diversity and all around has the greatest fucking vibe of any city Ive ever been to. \n The people who will hate Toronto are the people whose first - world problems rule their lives.This city owns.',
        imgs: ''
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

// adding notes:

let noteForm = document.getElementById('notes-form');
// this function will be removed when netlify form is figured out.
noteForm.addEventListener('submit', function(e) { 
    e.preventDefault(); //to get the form submission in netlify forms, I need to remove the prevent default function.


    // at local host, the [0]element is the note-from value.
    //at netlify, the element[0] is just a form wrapper. 
    // when publishing and being used on netlify, the elements[x] is pushed to x+1
    let notefrom = e.path[0].elements[1].value,
        notetitle = e.path[0].elements[2].value,
        notebody = e.path[0].elements[3].value;
    
    let newNote = {
        title: notetitle,
        from: notefrom,
        bodytext: notebody 
    }
    
    notes.push(newNote);
    renderNotes();
    noteForm.reset();
    
})

