// import functions and grab DOM elements

const startButton = document.getElementById('start-button');
const displayResults = document.getElementById('display');

// initialize state
startButton.addEventListener('click', () =>{
    let correctCounter = 0;
    alert('Hello! Lets begin.');
    const confirmAnswer = confirm('something');
    if (confirmAnswer === false){
        return;
    }
    const firstName = prompt('First off, what\'s your first name?');
    console.log(firstName);
    const lastName = prompt('And your last name?');
    console.log(lastName);

    const completeString = `Hello, ${firstName} ${lastName}. You got ${correctCounter} out of 3 answers correct!`;
    displayResults.textContent = completeString;
});
// set event listeners to update state and DOM