import { Lamp } from './lamp.js';
import { Button } from './button.js';
import { Counter } from './counter.js';

const timer = new Counter();
const lampRed = new Lamp(document.querySelector('body'), 'red');

const lampGreen = new Lamp(document.querySelector('body'), 'green');
const redLightBtn = new Button(document.querySelector('body'), lampGreen);
const timerBtn = new Button(document.querySelector('body'), timer);
window.lampRed = lampRed;
window.lampGreen = lampGreen;
