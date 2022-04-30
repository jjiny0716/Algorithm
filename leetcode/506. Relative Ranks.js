/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const placeMap = {
    0: "Gold Medal",
    1: "Silver Medal",
    2: "Bronze Medal",
  }

  const result = [];
  score = score.map((value, i) => [value, i]).sort((a, b) => b[0] - a[0]);
  for (let i = 0 ; i < score.length ; i++) {
    [value, index] = score[i];
    result[index] = placeMap[i] || (i + 1).toString();
  }
  
  return result;
};

const score = [10,3,8,9,4];
console.log(findRelativeRanks(score));