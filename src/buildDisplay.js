import addElement from './addElement.js';
import addText from './addText.js';
import createNewDisplay from './createNewDisplay.js';
import getWeather from './getWeather.js';
import updateDisplay from './updateDisplay.js';

export default function buildDisplay(location){
    createNewDisplay();
    getWeather(location);
}