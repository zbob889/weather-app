import addText from './addText.js';

export default async function tempConversion(type){

    let city = document.getElementById('locationName').innerHTML;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6c4b9b17c0b21ea22dbbcf808f49caf2`, {mode: 'cors'});
    const weatherData = await response.json();
    let currentTemp = weatherData.main.temp;

    if (type == 'F') {
        let newTemp = ((9/5) * (currentTemp - 273)) + 32;
        let roundedTemp = Math.round(newTemp * 10) / 10;
        addText('temp', `${roundedTemp}°F`);
    } else if (type == 'C') {
        let newTemp = (currentTemp - 273.15);
        let roundedTemp = Math.round(newTemp * 10) / 10;
        addText('temp', `${roundedTemp}°C`);
    };
};