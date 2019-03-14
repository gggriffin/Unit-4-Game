var firstCrystal = 0;
var secondCrystal = 0;
var thirdCrystal = 0;
var fourthCrystal = 0;
var targetNumber = Math.floor(Math.random() * 100 + 19);
var userScore = 0;
var wins = 0;
var losses = 0;



onload = function reset() {
    firstCrystal = 1 + Math.floor(Math.random() * 12);
    secondCrystal = 1 + Math.floor(Math.random() * 12);
    thirdCrystal = 1 + Math.floor(Math.random() * 12);
    fourthCrystal = 1 + Math.floor(Math.random() * 12);
    userScore = 0;

    $("#targetNumber").text("Target Number: " + targetNumber);
    $("#userScore").text("Your current score: " + userScore);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);

    console.log("1st Crystal: " + firstCrystal);
    console.log("2nd Crystal: " + secondCrystal);
    console.log("3rd Crystal: " + thirdCrystal);
    console.log("4th Crystal: " + fourthCrystal);

    //return (firstCrystal); <-- Isn't working. How to keep crystal value after load function?
}

console.log("After Function 1st Crystal: " + firstCrystal); //Tests Crystal value after function - currently equals 0


//To do:
//1. Crystal button press adds Crystal value to userScore

//2. if userScore == targetNumber, wins++, run reset()
//3. else if userScore > targetNumber, losses++, run reset()




