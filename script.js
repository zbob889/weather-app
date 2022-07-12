async function getWeather(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Arnhem&APPID=6c4b9b17c0b21ea22dbbcf808f49caf2`, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
};