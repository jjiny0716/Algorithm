/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
  const sorted = [...arr].sort((a, b) => a - b);

  let rankNum = 1;
  const rankMap = {};
  for (let num of sorted) {
    if (rankMap[num]) continue;
    rankMap[num] = rankNum++; 
  }
  
  return arr.map((num) => rankMap[num]);
};

const arr = [37,12,28,9,100,56,80,5,12];
console.log(arrayRankTransform(arr));