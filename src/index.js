import './style.css';
import buildDisplay from './buildDisplay.js';
import addText from './addText';
import tempConversion from './tempConversion.js';

const searchBar = document.getElementById('searchBar');
const submit = document.getElementById('submit');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let location = document.getElementById('searchBar').value;
    searchBar.value = '';
    buildDisplay(location);

    let tempButton = document.getElementById('tempType');
    tempButton.addEventListener('click', () => {
        let temp = document.getElementById('temp');
        if (temp.innerHTML.includes('C') == true) {
            tempConversion('F');
            console.log('C to F');
        } else if (temp.innerHTML.includes('F') == true) {
            tempConversion('C');
            console.log('F to C');
        }
    });
});

