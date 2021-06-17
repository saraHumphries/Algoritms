// const AnagramFinder = function (word) {
//     this.word = word.toLowerCase().split('');

// };

// AnagramFinder.prototype.findAnagrams = function (otherWords) {
   
//     const lowerCaseOtherWords = otherWords.map(word => word.toLowerCase()); 

//     const wordCompare = {};
//     for (const word of lowerCaseOtherWords) {
//         const splitWord = word.split('');
//         wordCompare[word] = [];
//         for (letter of splitWord) {
//             if (this.word.includes(letter)) {
//                 wordCompare[word].push(true);
//             }
//             else {
//                 wordCompare[word].push(false);
//             };
//         };
//     };
    
//     const anagrams = [];
//     for (const word of otherWords) {

//         const result = wordCompare[word.toLowerCase()].every((letterBool) => {
//             return letterBool;  
//         });
//         if (result && this.word.length === word.length && this.word.join('') !== word) {
//             anagrams.push(word);
//         };       
         
//     };
    
//     return anagrams;


// };



// prepare both into same format by spliting into a list, then ordering, then re-forming into a string.
// check if not the same original word (lowercase) and that are the same after the prep is done

const AnagramFinder = function (word) {
    this.word = word;

};

AnagramFinder.prototype.findAnagrams = function(otherWords) {
    return otherWords.filter((otherWord) => {
        return this.isNotTheSameWord(otherWord) && this.isAnagram(otherWord);
    });
};

AnagramFinder.prototype.isNotTheSameWord = function (otherWord) {
    return this.word.toLowerCase() !== otherWord.toLowerCase();
};

AnagramFinder.prototype.prepareWord = function(word) {
    return word.toLowerCase().split('').sort().join('');
};

AnagramFinder.prototype.isAnagram = function(otherWord) {
    return this.prepareWord(this.word) === this.prepareWord(otherWord);  
};


module.exports = AnagramFinder;
