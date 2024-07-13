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

const colors = {
    reset: '\033[0m',
    black: '\033[30m',
    red: '\033[31m',
    green: '\033[32m',
    yellow: '\033[33m',
    blue: '\033[34m',
    magenta: '\033[35m',
    cyan: '\033[36m',
    white: '\033[37m',
    blackBg: '\033[40m',
    redBg: '\033[41m',
    greenBg: '\033[42m',
    yellowBg: '\033[43m',
    blueBg: '\033[44m',
    magentaBg: '\033[45m',
    cyanBg: '\033[46m',
    whiteBg: '\033[47m',
};

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
    console.log(`${colors.red}${colors.whiteBg}Please choose rock 🗻, scissors ✂ or paper 📃 to play!${colors.reset}`);
    return;
} else {console.log(`${colors.whiteBg}${colors.red}Welcome to the game!${colors.reset}`,
    ); console.log(`${colors.greenBg}${colors.white}You have chosen ${userChoice}!${colors.reset}`);
}
const computerChoice = getRandomElement(choices);
console.log(`${colors.cyanBg}${colors.black}The Computer has chosen ♥ ${computerChoice}! It is getting exciting!${colors.reset}`);

if (userChoice === computerChoice) {
    console.log(`${colors.yellowBg}${colors.green}It's a tie! You are lucky!${colors.reset}`);
}
else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
){
    console.log(`${colors.magentaBg}${colors.blue}You won!${colors.reset}`);
}
else {
    console.log(`${colors.redBg}${colors.cyan}You lost! I am sorry!${colors.reset}`)
};




