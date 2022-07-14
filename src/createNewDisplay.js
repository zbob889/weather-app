import addElement from './addElement.js';
import addText from './addText.js';

export default function createNewDisplay(){
    addText('display', '');

    addElement('div', '', 'weatherDisplay', 'display');

    addElement('div', '', 'top', 'weatherDiplay');
    addElement('div', '', 'location', 'top');
    addElement('p', '', 'locationName', 'location');
    addElement('div', '', 'svg', 'location');
    addElement('div', '', 'weather', 'top');
    addElement('p', '', 'weatherName', 'weather');

    addElement('div', '', 'middle', 'weatherDisplay');
    addElement('div', '', 'temp', 'middle');
    addElement('div', '', 'humidity', 'middle');

    addElement('div', '', 'bottom', 'weatherDisplay');
    addElement('button', '', 'tempType', 'bottom');
};