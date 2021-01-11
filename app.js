// import functions and grab DOM elements
import { countAsAYes } from './utils.js'
const startButton = document.getElementById('start-button');
const displayResults = document.getElementById('display');

// initialize state
startButton.addEventListener('click', () =>{
    let correctCounter = 0;

    alert('Hello! Lets begin.');
    const confirmAnswer = confirm('something');
    if (confirmAnswer === false) return;

    const firstName = prompt('First off, what\'s your first name?');
    if (firstName === null) return;
    const lastName = prompt('And your last name?');
    if (firstName === null) return;

    const firstAnswer = prompt('the first question');
    if (countAsAYes(firstAnswer)) ++correctCounter;
    const secondAnswer = prompt('the second question');
    if (!countAsAYes(secondAnswer)) ++correctCounter;
    const thirdAnswer = prompt('the third question');
    if (!countAsAYes(thirdAnswer)) ++correctCounter;

    const completeString = `Hello, ${firstName} ${lastName}. You got ${correctCounter} out of 3 answers correct!`;
    displayResults.textContent = completeString;
});
// set event listeners to update state and DOM