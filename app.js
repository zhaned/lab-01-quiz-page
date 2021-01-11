// import functions and grab DOM elements

const startButton = document.getElementById('start-button');
const displayResults = document.getElementById('display');

// initialize state
startButton.addEventListener('click', () =>{
    alert('Hello! Lets begin.');
    const confirmAnswer = confirm('something');
    if (confirmAnswer === false){
        return;
    }






});
// set event listeners to update state and DOM