import addText from './addText.js';

function pickIcon(){
    let currentIcon = localStorage.getItem('currentIcon');
    let newElement = document.getElementById('icon');
    newElement.setAttribute('src', `https://openweathermap.org/img/wn/${currentIcon}@2x.png`);
}


export default function updateDisplay(){
    let currentTemp = localStorage.getItem('currentTemp');
    let currentHumidity = localStorage.getItem('currentHumidity');
    let currentLocation = localStorage.getItem('currentLocation');
    let currentSky = localStorage.getItem('currentSky');

    let currentTempCelcius = Math.round(10*(currentTemp - 273.15))/10;

    addText('locationName', `${currentLocation}`);
    addText('weatherName', `${currentSky}`);
    addText('temp', `${currentTempCelcius}°C`);
    addText('humidity', `Humidity ${currentHumidity}%`);
    pickIcon();
};