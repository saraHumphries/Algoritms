const IsogramFinder = function (word) {
    this.word = word.split('');

};

IsogramFinder.prototype.isIsogram = function () {
    const letterCounter = {};
    for (letter of this.word) {
        if (letterCounter[letter]) {
            letterCounter[letter] += 1;
        }
        else {
            letterCounter[letter] = 1;
        };
    };
    for (value of Object.values(letterCounter)) {
        if (value > 1) {
            return false;
        };

    };
    return true;
};

module.exports = IsogramFinder;
