export default async function getWeather(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6c4b9b17c0b21ea22dbbcf808f49caf2`, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);

    let currentTemp = weatherData.main.temp;
    let currentHumidity = weatherData.main.humidity;
    let currentLocation = weatherData.name;
    let currentSky = weatherData.weather[0].description;

    localStorage.setItem('currentTemp', currentTemp);
    localStorage.setItem('currentHumidity', currentHumidity);
    localStorage.setItem('currentLocation', currentLocation);
    localStorage.setItem('currentSky', currentSky);

};

// Current temp in kelvin: weatherData.main.temp
// Current humidity: weatherData.main.humidity
// Current location: weatherData.name
// Current sky: weatherData.weather.0.description