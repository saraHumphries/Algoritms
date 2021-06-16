const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.split('');
};

PangramFinder.prototype.isPangram = function () {
  
  const tracker = {};
  for (letter of this.alphabet) {
    for (character of this.phrase) {
      if (letter === character) {
        tracker[letter] = true;
      }
      else {
        tracker[letter] = false;
      };
    };
  };
  console.log(tracker);
};



module.exports = PangramFinder;

