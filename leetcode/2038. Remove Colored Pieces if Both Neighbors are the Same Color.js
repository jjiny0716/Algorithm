/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
  const counter = {
    A: 0,
    B: 0,
  }
  let curChar = colors[0], sequenceCount = 1;
  for (let i = 1 ; i < colors.length ; i++) {
    if (curChar === colors[i]) {
      sequenceCount++;
    }
    else {
      curChar = colors[i];
      sequenceCount = 1;
    }

    if (sequenceCount >= 3) counter[curChar]++;
  }

  return counter['A'] > counter['B'];
};

const colors = "ABBBBBBBAAA";
console.log(winnerOfGame(colors));