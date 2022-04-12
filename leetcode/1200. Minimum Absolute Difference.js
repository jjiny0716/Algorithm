/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  let minAbsDiff = Infinity;
  let result = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    const absDiff = Math.abs(arr[i] - arr[i + 1]);
    if (absDiff < minAbsDiff) {
      result = [[arr[i], arr[i + 1]]];
      minAbsDiff = absDiff;
    }
    else if (absDiff === minAbsDiff) result.push([arr[i], arr[i + 1]]);
  }

  return result;
};

const arr = [3,8,-10,23,19,-4,-14,27];
console.log(minimumAbsDifference(arr));
