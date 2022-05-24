/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  const binaryCounts = strs.map((str) => str.split('').reduce((countObj, bit) => {
    countObj[bit]++;
    return countObj;
  }, { 0: 0, 1: 0 }));
  
  let result = 0;
  makeAllSubset(-1);

  function makeAllSubset(lastIndex, count = 0, zeroCount = 0, oneCount = 0) {
    if (zeroCount <= m && oneCount <= n) {
      result = Math.max(result, count);
    }
    else return;

    for (let i = lastIndex + 1 ; i < binaryCounts.length ; i++) {
      makeAllSubset(i, count + 1, zeroCount + binaryCounts[i][0], oneCount + binaryCounts[i][1]);
    }
  }

  return result;
};

const strs = ["10","0001","111001","1","0"], m = 5, n = 3;
console.log(findMaxForm(strs, m, n));