// eslint-disable-next-line
exports.shuffle = array => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    // eslint-disable-next-line
    array[currentIndex] = array[randomIndex];
    // eslint-disable-next-line
    array[randomIndex] = temporaryValue;
  }
  return array;
};
