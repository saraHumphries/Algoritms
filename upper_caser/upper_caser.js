const UpperCaser = function (words) {
    this.words = words;
};

UpperCaser.prototype.toUpperCase = function () {
    
    const upperCaseWords = this.words.map((word) => {
        return word.toUpperCase();
    });
    return upperCaseWords;

};

module.exports = UpperCaser;
