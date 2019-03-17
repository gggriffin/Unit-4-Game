var wins = 0;
var losses = 0;
var userScore = 0;
var firstCrystal = 0;
var secondCrystal = 0;
var thirdCrystal = 0;
var fourthCrystal = 0;
var targetNumber = 0;

$(document).ready(function() {
    
    function reset() {
        targetNumber = Math.floor(Math.random() * 100 + 19);
        userScore = 0;
        firstCrystal = 1 + Math.floor(Math.random() * 12);
        secondCrystal = 1 + Math.floor(Math.random() * 12);
        thirdCrystal = 1 + Math.floor(Math.random() * 12);
        fourthCrystal = 1 + Math.floor(Math.random() * 12);

        $("#targetNumber").text("Target Number: " + targetNumber);
        $("#userScore").text("Current Score: " + userScore);
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);

        console.log("1st Crystal: " + firstCrystal);
        console.log("2nd Crystal: " + secondCrystal);
        console.log("3rd Crystal: " + thirdCrystal);
        console.log("4th Crystal: " + fourthCrystal);
    }
    reset();
    
    $("#firstCrystal").click(function() {

        userScore = (firstCrystal + userScore);
        $("#userScore").text("Current Score: " + userScore);

        if (userScore == targetNumber) {
            wins++;
            reset();
            
        } else if (userScore > targetNumber) {
            losses++
            reset();
        }
    });

    $("#secondCrystal").click(function() {

        userScore = (secondCrystal + userScore);
        $("#userScore").text("Current Score: " + userScore);
        
        if (userScore == targetNumber) {
            wins++;
            reset();
            
        } else if (userScore > targetNumber) {
            losses++
            reset();
        }
    });

    $("#thirdCrystal").click(function() {

        userScore = (thirdCrystal + userScore);
        $("#userScore").text("Current Score: " + userScore);
        
        if (userScore == targetNumber) {
            wins++;
            reset();
            
        } else if (userScore > targetNumber) {
            losses++
            reset();
        }
    });

    $("#fourthCrystal").click(function() {

        userScore = (fourthCrystal + userScore);
        $("#userScore").text("Current Score: " + userScore);

        if (userScore == targetNumber) {
            wins++;
            reset();
            
        } else if (userScore > targetNumber) {
            losses++
            reset();
        }
    });

});





