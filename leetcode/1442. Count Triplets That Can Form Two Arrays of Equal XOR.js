/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
  const n = arr.length;
  const pSum = [0];
  for (let i = 0 ; i < n ; i++) {
    arr[i] ^= arr[i - 1];
    pSum.push(arr[i]);
  }

  let result = 0;
  for (let i = 0 ; i < n ; i++) {
    for (let j = i + 1 ; j < n ; j++) {
      for (let k = j ; k < n ; k++) {
        const a = arr[i - 1] ^ arr[j - 1];
        const b = arr[j - 1] ^ arr[k]; 
        if (a === b) result++;
      }
    }
  }

  return result;
};

// 0 1 0 1 0 1

const arr = [1,1,1,1,1];
console.log(countTriplets(arr));