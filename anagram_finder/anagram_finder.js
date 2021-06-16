const AnagramFinder = function (word) {
    this.word = word.toLowerCase().split('');

};

AnagramFinder.prototype.findAnagrams = function (otherWords) {

    
    const lowerCaseOtherWords = [];
    for (const word of otherWords) {
        lowerCaseOtherWords.push(word.toLowerCase());
    };

    // console.log("otherWords: ", otherWords);
    // console.log("lowerCaseOtherWords: ", lowerCaseOtherWords);

    const wordCompare = {};
    for (const word of lowerCaseOtherWords) {
        const splitWord = word.split('');
        wordCompare[word] = [];
        for (letter of splitWord) {
            if (this.word.includes(letter)) {
                wordCompare[word].push(true);
            }
            else {
                wordCompare[word].push(false);
            };
        };
    };
    
    const anagrams = [];
    for (const word of otherWords) {

        const result = wordCompare[word.toLowerCase()].every((letterBool) => {
            return letterBool;  
        });
        if (result && this.word.length === word.length && this.word.join('') !== word) {
            anagrams.push(word);
        };       
         
    };
    
    return anagrams;


};

module.exports = AnagramFinder;
