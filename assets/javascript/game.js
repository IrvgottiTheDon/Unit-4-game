// DECLARE OUR VARIABLES
var numOfWins = 0;
var numOfLoses = 0;
var totalScore = 0;
var randomNumber = 0;
var diamondArray = [0, 0, 0, 0];

// Updates the HTML
function updateHTML() {
    // Using JavaScript
    // document.getElementById("wins").innerHTML = numOfWins;
    // document.getElementById("losses").innerHTML = numOfLoses;
    // document.getElementById("totalScore").innerHTML = totalScore;
    // document.getElementById("randomNumber").innerHTML = randomNumber;

    // Using JQuery
    $("#wins").text(numOfWins);
    $("#losses").text(numOfLoses);
    $("#totalScore").text(totalScore);
    $("#randomNumber").text(randomNumber);
}

// Generates a random number at the start of the game
// The random number shown at the start of the game should be between 19 - 120
function generateRandomNumber(){
    //randomNumber generator between the number of words
    randomNumber = Math.floor(Math.random() * 101 )+19;
    updateHTML();
}

// Update the score counter by the value of the crystal
function updateScoreCounter(value){
    totalScore += value;
    updateHTML();
    checkWinLose();
}

// When player clicks the crystal add a certain amount of points to the players total score
// Hide amount of the crytal until they click it then show it
// Each crystal should have a random hidden value between 1 - 12.
function playerClicksCrystal(diamondIndex){
    // if diamondPosition has not been set, generate a random number between 1-12 and set the value for that position
    if (diamondArray[diamondIndex] == 0){
        diamondArray[diamondIndex] = Math.floor(Math.random() * 12 )+1;
    }
    updateScoreCounter(diamondArray[diamondIndex]);
}

// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.
function checkWinLose(){
    // if player totalScore matches the randomNumber
    if (totalScore == randomNumber){
        // player wins the game, increase count of wins by 1, start a new game.
        numOfWins += 1;
        resetGameValues();
        startNewGame();
    }

    // if player totalScore exceeds the random Number
    if (totalScore > randomNumber){
        //player loses the game, increase losses count by 1, start a new game.
        numOfLoses += 1;
        resetGameValues();
        startNewGame();
    }

}

// reset all the values to default (except wins/losses)
function resetGameValues(){
    totalScore = 0;
    randomNumber = 0;
    diamondArray = [0, 0, 0, 0];
}

function startNewGame(){
    // show player a random number
    generateRandomNumber();
}