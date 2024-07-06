/*
English to Pig Latin Translator

    Description: Create a program that translates English text to Pig Latin.
    Requirements:
        The program should take an English phrase as an input from process.argv.
        Convert each word to Pig Latin:
            If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add “ay.”
                Example: Happy = appyh + ay = appyhay
            If a word starts with two consonants move the two consonants to the end of the word and add “ay.”
                Example: Child = Ildch + ay = Ildchay
            If a word starts with a vowel add the word “way” at the end of the word.
                Example: Awesome = Awesome +way = Awesomeway
        Output the translated phrase to the console.
    Example:
        node pigLatin.js "Pig Latin is hard to speak"
        # Output: Igpay Atinlay isway ardhay otay eakspay

*/

const orgInput = process.argv.slice(2);
const orgInputString = orgInput.join(' ');
const vowelsArr = ["a", "e", "i", "o", "u", "y"];
let orgIArr = orgInputString.split(' ');


function pigLatin(orgIArr) {
orgIArr.forEach((word, index) =>{
    if(word.length === 0){ return;}

    const isFirstLetterUppercase = word[0] === word[0].toUpperCase();
    const firstLetter = word[0].toLowerCase();
    const secondLetter = word[1]?.toLowerCase();
    const thirdLetter = word[2]?.toLowerCase();
    if(!vowelsArr.includes(firstLetter) && vowelsArr.includes(secondLetter)){
            transformedWord = (word.slice(1) + firstLetter + "ay");
    }
    else if (!vowelsArr.includes(firstLetter) && !vowelsArr.includes(secondLetter) && !vowelsArr.includes(thirdLetter)){
        transformedWord = (word.slice(3) + firstLetter + secondLetter + thirdLetter + "ay");
    }
    else if (!vowelsArr.includes(firstLetter) && !vowelsArr.includes(secondLetter)){
    transformedWord = (word.slice(2) + firstLetter + secondLetter + "ay");
}
else if (vowelsArr.includes(firstLetter)){
    transformedWord = (word + "way");
}

    else{
        transformedWord = (word);
    }

    if (isFirstLetterUppercase) {
        transformedWord = transformedWord[0].toUpperCase() + transformedWord.slice(1);
    }
    orgIArr[index] = transformedWord;
});};

pigLatin(orgIArr);
const sentence = orgIArr.join(' ');
console.log(sentence);