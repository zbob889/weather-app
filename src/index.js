import './style.css';
import getWeather from './getWeather.js';
import getTemp from './getTemp';

const searchBar = document.getElementById('searchBar');
const submit = document.getElementById('submit');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let location = document.getElementById('searchBar').value;
    searchBar.value = '';

    getWeather(location);
});

