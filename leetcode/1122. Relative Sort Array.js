/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const map = {};
  for (let i = 0 ; i < arr2.length ; i++) {
    map[arr2[i]] = i;
  }
  
  return arr1.sort((a, b) => (map[a] ?? (1001 + a)) - (map[b] ?? (1001 + b)));
};

const arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6];
console.log(relativeSortArray(arr1, arr2));