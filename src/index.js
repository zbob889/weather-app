


async function getWeather(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6c4b9b17c0b21ea22dbbcf808f49caf2`, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
};

const searchBar = document.getElementById('searchBar');
const submit = document.getElementById('submit');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let location = document.getElementById('searchBar').value;
    localStorage.setItem('location', location);
    searchBar.value = '';

    getWeather(location);
});

