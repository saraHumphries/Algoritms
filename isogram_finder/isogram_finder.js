const IsogramFinder = function (word) {
    this.word = word.split('');

};

IsogramFinder.prototype.isIsogram = function () {
    
    noRepeatedLetters = this.countLetters().every((value) => {
        return value === 1;
    });

    return noRepeatedLetters;
};



IsogramFinder.prototype.countLetters = function () {
    const letterCounter = {};
    for (letter of this.word) {
        if (letterCounter[letter]) {
            letterCounter[letter] += 1;
        }
        else {
            letterCounter[letter] = 1;
        };
    };

    const values = Object.values(letterCounter);
    return values;
};

module.exports = IsogramFinder;
