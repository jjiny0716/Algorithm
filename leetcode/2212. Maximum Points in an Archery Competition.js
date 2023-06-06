/**
 * @param {number} numArrows
 * @param {number[]} aliceArrows
 * @return {number[]}
 */
var maximumBobPoints = function(numArrows, aliceArrows) {
  let maxScore = 0;
  let bobArrows = [];
  const findMaxScore = (i, n, score, arrows = new Array(12).fill(0)) => {
    if (n < 0) return;
    if (i === 0 || n === 0) {
      if (score > maxScore) {
        maxScore = score;
        bobArrows = [...arrows];
        bobArrows[0] = n;
      }
      return;
    }

    const usedArrow = aliceArrows[i] + 1;
    arrows[i] = usedArrow;
    findMaxScore(i - 1, n - usedArrow, score + i, arrows);
    arrows[i] = 0;
    findMaxScore(i - 1, n, score, arrows);
  }

  findMaxScore(11, numArrows, 0);
  return bobArrows;
};

const numArrows = 9, aliceArrows = [1,1,0,1,0,0,2,1,0,1,2,0];
console.log(maximumBobPoints(numArrows, aliceArrows));