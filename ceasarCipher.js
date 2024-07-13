/*
Caesar Cipher

    Description: Implement a basic Caesar Cipher encryption.
    Requirements:
        The program should take a phrase and a shift number as inputs from process.argv.
        Encrypt the phrase by shifting each letter, based on its position in the english alphabet, by the specified number.
        Case insensitive
        A negative shift means shift to the left
        A positive shift means shift to the right
        Output the encrypted phrase to the console.
    Example:
        node caesarCipher.js "hello world" 3
        # Output: khoor zruog


*/


const orgInput = process.argv.slice(2);
//const orgInput = "this is example input 2"
let inString = orgInput.filter(item => isNaN(item));
//let orgIArr = inString.split(' ');
let shiftNumber = orgInput.filter(item => !isNaN(item));
let number = Number(shiftNumber);
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

console.log(inString);
console.log(number);

let newText =[];

inString.forEach(word => {
    const letters = word.toUpperCase().split('');
    let newWord = letters.map( letter => {
        const index = alphabet.findIndex(alphabetLetter => alphabetLetter === letter);

        if (index !== -1){
            const newIndex = (index+number) % alphabet.length;
            const wrappedIndex = newIndex < 0 ? alphabet.length +newIndex: newIndex ;
            //console.log(`New index for ${letter} is: ${wrappedIndex}`)
            
            const newLetter = alphabet[wrappedIndex];
            return newLetter.toLowerCase();
            console.log(newLetter.toLowerCase());}
        else {
            return letter;
        }
        
       
    });

    newText.push(newWord.join(''));

});



console.log(newText.join(' '));