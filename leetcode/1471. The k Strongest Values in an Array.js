/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function (arr, k) {
  arr.sort((a, b) => a - b);
  const m = arr[Math.floor((arr.length - 1) / 2)];

  let i = 0, j = arr.length - 1;
  const result = [];
  while (k) { 
    if (m - arr[i] <= arr[j] - m) result.push(arr[j--]);
    else result.push(arr[i++]);
    k--;
  }

  return result;
};

const arr = [6, 7, 11, 7, 6, 8],
  k = 5;
console.log(getStrongest(arr, k));
