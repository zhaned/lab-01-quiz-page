// import functions and grab DOM elements
import { countAsAYes } from './utils.js';
const startButton = document.getElementById('start-button');
const displayResults = document.getElementById('display');

// initialize state
startButton.addEventListener('click', () =>{
    let correctCounter = 0;

    alert('Hello there!');
    const confirmAnswer = confirm('Are you sure you want to begin?');
    if (confirmAnswer === false) return;

    const firstName = prompt('First off, what\'s your first name?');
    if (firstName === null) return;
    const lastName = prompt('And your last name?');
    if (firstName === null) return;

    const firstAnswer = prompt('Was the first working vehicle made in 1672?');
    if (countAsAYes(firstAnswer)) ++correctCounter;
    const secondAnswer = prompt('Can your bike be considered a car?');
    if (!countAsAYes(secondAnswer)) ++correctCounter;
    const thirdAnswer = prompt('Was Henry Ford the first person to make large scale production of affordable cars?');
    if (!countAsAYes(thirdAnswer)) ++correctCounter;

    const completeString = `Hello, ${firstName} ${lastName}. You got ${correctCounter} out of 3 answers correct!`;
    displayResults.textContent = completeString;
});
// set event listeners to update state and DOM