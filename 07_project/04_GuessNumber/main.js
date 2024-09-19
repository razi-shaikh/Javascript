let randomNumber = randomNum();
// console.log(`random number is ${randomNumber}`);
let previousGuess = document.querySelector('.previousGuess');
let inputArray=[]; 
let guessRemaining = document.querySelector('.guessRemaining');
const userValue = document.querySelector('.guessField');
const submit = document.querySelector('#submitBut')
const endGameBut = document.querySelector('#endGameBut')
const newGameBut = document.querySelector('#newGameBut')
const messageBox = document.querySelector('.messageBox')
const form = document.querySelector('form')
let playGame = true;
let attempt= 1;

if(playGame){
    form.addEventListener('submit',function (event) {
        event.preventDefault();
        const userInput = parseInt(userValue.value)
        // console.log(userInput);
        inputValidation(userInput)
    })
}


function randomNum() {
    const min=1,max=100;
    return (Math.floor(Math.random()*(max-min+1)+min));
} 

function inputValidation(value) {
    if(isNaN(value)){
        // console.log(value);
        displayMessage('Enter a valid number');
    }
    else if(value<1 || value>100){
        // console.log(value);
        displayMessage('Enter number between 1 to 100');
    }
    else if(value>=1 && value<=100){
        inputArray.push(value)
        // console.log(inputArray);
        if(attempt>10){
            displayMessage(`Game Over. The random number is ${randomNumber}.`);
            endGame();
        }
        else{// if(attempt<=10)
            checkGuess(value)
        }
    }
}


function checkGuess(value) {
    if(randomNumber===value){
        displayMessage('you  win');
        endGame();
    }
    else if(value>randomNumber){
        displayMessage(`try with lesser number`);
    }
    else if(value<randomNumber){
        displayMessage(`try with greater number`);
    }
    update(value)
}


function displayMessage(message) {
    messageBox.innerHTML=`${message}`;
}


function update(value) {
    userValue.value=''
    previousGuess.innerHTML +=`${value}; `;
    guessRemaining.innerHTML=`${10-attempt}`
    attempt++;
}

function endGame() {
    guessField.style='display: none;'
    submitBut.style='display: none;'
    newGameBut.style='display: inline-block;'
    playGame=false;
}
function newGame() {
    guessField.style='display: inline-block;'
    submit.style='display: inline-block;'
    newGameBut.style='display: none;'
    userValue.value=''
    attempt=1;
    inputArray=[];
    previousGuess.innerHTML =``;
    displayMessage(``)
    randomNumber=randomNum();
    playGame=true;

}