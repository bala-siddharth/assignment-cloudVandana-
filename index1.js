// take a sentence as an input and reverse every word in that sentence Example-This is a  sunny day>shiT si a ynnus yad

function reverseWordsInSentence(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.map(word => word.split('').reverse().join(''));
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

const inputSentence = "This is a sunny day";
const reversedResult = reverseWordsInSentence(inputSentence);
console.log(reversedResult);



// performing sorting of an array in descending order 

const arr = [5, 2, 9, 1, 5, 6];
arr.sort(function(a, b) {
    return b - a;
});
console.log(arr); 