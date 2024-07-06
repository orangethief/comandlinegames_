/*Rock Paper Scissors

Description: Implement a basic Rock Paper Scissors game.
Requirements:
The program should take the player’s move as an input from process.argv.
The program should randomly generate a move for the computer.
Determine the winner based on the rules of Rock Paper Scissors.
Output the result (win, lose, or draw) to the console.
    
Example:
node rockPaperScissors.js rock
# Output: You chose rock. Computer chose scissors. You win!*/

const userChoiceArray = process.argv.slice(2);
const userChoice = userChoiceArray[0];
const choices = ["rock", "scissors", "paper"];
let userScore = 0;
let compScore = 0;

function getRandomElement(choices) {
    const randomIndex = Math.floor(Math.random () * choices.length);
    return choices[randomIndex];
};

if (userChoice !== "rock" && userChoice !== "scissors" && userChoice !== "paper") {
    console.error('Please choose rock, scissors or paper to play!');
    return;
} else {console.log(`%cWelcome to the game!`,
    "font-weight: bold; font-size: 50px; color: red; text-shadow: 3px 3px 0 rgb(217,31,38), 6px 6px 0 rgb(226,91,14), 9px 9px 0 rgb(245,221,8), 12px 12px 0 rgb(5,148,68), 15px 15px 0 rgb(2,135,206), 18px 18px 0 rgb(4,77,145), 21px 21px 0 rgb(42,21,113); margin-bottom: 12px; padding: 5%;"
  ); console.log(`%cYou have chosen ${userChoice}! 🦄`, "font-weight: bold; font-size: 20px;");
}
const computerChoice = getRandomElement(choices);
console.log(`%cThe Computer has chosen ${computerChoice}🥁! It is getting exciting!`,"font-weight: bold; font-size: 20px;");

if (userChoice === computerChoice) {
    console.log("%cIt's a tie! 👔 You are lucky!", "font-weight: bold; font-size: 20px;");
}
else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
){
    console.log("%cYou won! 🎆", "font-weight: bold; font-size: 50px; color: red; text-shadow: 3px 3px 0 rgb(217,31,38), 6px 6px 0 rgb(226,91,14), 9px 9px 0 rgb(245,221,8), 12px 12px 0 rgb(5,148,68), 15px 15px 0 rgb(2,135,206), 18px 18px 0 rgb(4,77,145), 21px 21px 0 rgb(42,21,113); margin-bottom: 12px; padding: 5%;");
}
else {
    console.log("%cYou lost! 😥 I am sorry!", "font-weight: bold; font-size: 20px;")
};




