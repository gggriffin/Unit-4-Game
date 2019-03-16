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

        console.log(targetNumber, 'target number upon reset');
        $("#targetNumber").text("Target Number: " + targetNumber);
        console.log(targetNumber, 'target number after changing DOM');
        $("#userScore").text("Your current score: " + userScore);
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
        $("#userScore").text("Your current score: " + userScore);
        console.log("Before if/else score " + userScore);
        console.log("Before if/else crystal " +firstCrystal);

        console.log(userScore, 'userScore');
        console.log(targetNumber, 'targetNumber')
        if (userScore == targetNumber) {
            wins++;
            reset();
            console.log("After if score " + userScore);
            console.log("After if crystal " +firstCrystal);
            
        } else if (userScore > targetNumber) {
            losses++
            reset();
            console.log("After else score " + userScore);
            console.log("After else crystal " + firstCrystal);
        }
    });

    $("#secondCrystal").click(function() {

        userScore = (secondCrystal + userScore);
        $("#userScore").text("Your current score: " + userScore);
        console.log("Before if/else score " + userScore);
        console.log("Before if/else crystal " +firstCrystal);

        console.log(userScore, 'userScore');
        console.log(targetNumber, 'targetNumber')
        if (userScore == targetNumber) {
            wins++;
            reset();
            console.log("After if score " + userScore);
            console.log("After if crystal " +firstCrystal);
            
        } else if (userScore > targetNumber) {
            losses++
            reset();
            console.log("After else score " + userScore);
            console.log("After else crystal " + firstCrystal);
        }
    });

    $("#thirdCrystal").click(function() {

        userScore = (thirdCrystal + userScore);
        $("#userScore").text("Your current score: " + userScore);
        console.log("Before if/else score " + userScore);
        console.log("Before if/else crystal " +firstCrystal);

        console.log(userScore, 'userScore');
        console.log(targetNumber, 'targetNumber')
        if (userScore == targetNumber) {
            wins++;
            reset();
            console.log("After if score " + userScore);
            console.log("After if crystal " +firstCrystal);
            
        } else if (userScore > targetNumber) {
            losses++
            reset();
            console.log("After else score " + userScore);
            console.log("After else crystal " + firstCrystal);
        }
    });

    $("#fourthCrystal").click(function() {

        userScore = (fourthCrystal + userScore);
        $("#userScore").text("Your current score: " + userScore);
        console.log("Before if/else score " + userScore);
        console.log("Before if/else crystal " +firstCrystal);

        console.log(userScore, 'userScore');
        console.log(targetNumber, 'targetNumber')
        if (userScore == targetNumber) {
            wins++;
            reset();
            console.log("After if score " + userScore);
            console.log("After if crystal " +firstCrystal);
            
        } else if (userScore > targetNumber) {
            losses++
            reset();
            console.log("After else score " + userScore);
            console.log("After else crystal " + firstCrystal);
        }
    });

});

//values don't seem to be fully resetting. 
//userScore is not resetting on reset. The if and the else
//statements both run on every click after the first userScore == or is > target score

//To do:
//1. Crystal button press adds Crystal value to userScore, update userScore display

//2a. if userScore == targetNumber, wins++, run reset()
//2b. else if userScore > targetNumber, losses++, run reset()




