// import functions and grab DOM elements
import { countAsAYes } from './utils.js';
const startButton = document.getElementById('start-button');
const displayResults = document.getElementById('display');
const preReading = document.getElementById('text-info');


// initialize state
startButton.addEventListener('click', () =>{
    let correctCounter = 0;

    alert('Hello there!');
    const confirmAnswer = confirm('Are you ready to begin?');
    if (confirmAnswer === false) return;

    const firstName = prompt('First off, what\'s your first name?');
    const lastName = prompt('And your last name?');

    const firstAnswer = prompt(`Alright, ${firstName} ${lastName}. Lets begin. Was the first working vehicle made in 1672? (Yes/No)`);
    if (countAsAYes(firstAnswer)) ++correctCounter;
    const secondAnswer = prompt(`Can your bike be considered a car? (Yes/No)`);
    if (!countAsAYes(secondAnswer)) ++correctCounter;
    const thirdAnswer = prompt(`Was Henry Ford the first person to make large scale production of affordable cars? (Yes/No)`);
    if (!countAsAYes(thirdAnswer)) ++correctCounter;

    alert(`Thank you for participating in this quiz!`);
    preReading.style.display = 'none';

    const completeString = `Congratulations, ${firstName} ${lastName}. You got ${correctCounter} out of 3 answers correct!`;
    displayResults.textContent = completeString;
});
// set event listeners to update state and DOM