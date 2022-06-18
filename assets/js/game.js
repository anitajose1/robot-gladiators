// Game States
// "WIN" - Player robot has defeated all enemy robots
// * Fight all enemy robots
// * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
//You can also log multiple values at once like this:  console.log(playerName, playerAttack, playerHealth)

// Create an array to store multiple enemy names
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

/* Note: A JavaScript function is a block of code designed to perform a particular task. 
The javascript method is an object property that has a function value. */


//fight function
var fight = function(enemyName) {

    // Alert players that they are starting the round.
    window.alert("Welcome to Robot Gladiators!");

    // Give the player the choice to fight or skip the fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
     // Log a resulting message to the console so we know that it worked.
     console.log(promptFight)

     // if player chooses to fight, then fight
     if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        )

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        )

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

        // if player chooses to skip
     } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you want to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert (playerName + " has decided to skip this fight. Goodbye!");

             // subtract money from player for skipping
             playerMoney = playerMoney - 2;
        }
        // if no (false), ask question again by running fight () again
        else {
            fight ();
        }
        // if player did not chose 1 or 2 in prompt
     } else {
        window.alert("You need to choose a valid option. Try again!");
     }
}; // end of fight function

// use for loop to call the fight within the loop
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}