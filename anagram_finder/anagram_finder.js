const AnagramFinder = function (word) {
    this.word = word.split('');

};

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    
    const wordCompare = {};
    for (word of otherWords) {
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
    for (word of otherWords) {

        const result = wordCompare[word].every((letterBool) => {
            return letterBool;  
        });
        if (result) {
            anagrams.push(word);
        };        
    };
    return anagrams;


};

module.exports = AnagramFinder;
