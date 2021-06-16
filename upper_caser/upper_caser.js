const UpperCaser = function (words) {
    this.words = words;
};

UpperCaser.prototype.toUpperCase = function () {
    const upperCaseWords = [];
    for (word of this.words) {
        upperCaseWords.push(word.toUpperCase()); 
    };
    return upperCaseWords;

};

module.exports = UpperCaser;
