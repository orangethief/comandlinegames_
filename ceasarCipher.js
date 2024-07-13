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


/*const orgInput = process.argv.slice(2);*/
const orgInput = "this is example input"
let orgIArr = orgInput.split(' ');
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

orgIArr.forEach(word => {
    const letters = word.toUpperCase().split('');
    letters.forEach(letter => {
        const index = alphabet.findIndex(alphabetLetter => alphabetLetter === letter);
        return(index);
    })
});

