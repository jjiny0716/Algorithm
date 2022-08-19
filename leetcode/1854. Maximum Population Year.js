/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
  const diffArr = new Array(101).fill(0);
  for (const [birth, death] of logs) {
    diffArr[birth - 1950]++;
    diffArr[death - 1950]--;
  }

  let max = 0, maxYear;
  let cur = 0;
  for (let i = 0 ; i < diffArr.length ; i++) {
    cur += diffArr[i];
    if (cur > max) {
      max = cur;
      maxYear = i + 1950;
    }
  }

  return maxYear;
};

const logs = [[1950,1961],[1960,1971],[1970,1981]];
console.log(maximumPopulation(logs));