/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
  const MOD = 10 ** 9 + 7;
  const minStack = [];
  let stackSum = 0, result = 0;
  for (let i = 0 ; i < arr.length ; i++) {
    while (minStack.length && minStack.at(-1)[0] > arr[i]) {
      const [value, index] = minStack.pop();
      stackSum -= value * (index - (minStack.at(-1) ? minStack.at(-1)[1] : -1));
    }

    stackSum += arr[i] * (i - (minStack.at(-1) ? minStack.at(-1)[1] : -1));
    minStack.push([arr[i], i]);
    result = (result + stackSum) % MOD;
  }

  return result;
};

const arr = [11,81,94,43,3];
console.log(sumSubarrayMins(arr));

// 3  1 1  1 1 2  1 1 2 4
// 11  11 81  11 81 94  11 43 43 43  3 3 3 3 3