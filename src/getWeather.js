import addText from "./addText";

export default async function getWeather(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6c4b9b17c0b21ea22dbbcf808f49caf2`, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);

    let currentTemp = weatherData.main.temp;
    let currentHumidity = weatherData.main.humidity;
    let currentLocation = weatherData.name;
    let currentSky = weatherData.weather[0].description;
    let currentIcon = weatherData.weather[0].icon;

    let currentTempCelcius = Math.round(10*(currentTemp - 273.15))/10;

    addText('locationName', `${currentLocation}`);
    addText('weatherName', `${currentSky}`);
    addText('temp', `${currentTempCelcius}°C`);
    addText('humidity', `Humidity ${currentHumidity}%`);

    let newElement = document.getElementById('icon');
    newElement.setAttribute('src', `https://openweathermap.org/img/wn/${currentIcon}@2x.png`);

};