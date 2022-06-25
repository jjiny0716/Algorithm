/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function(arr, k) {
  let winner = arr[0], winCount = 0;

  for (let i = 1 ; i < arr.length ; i++) {
    if (winCount === k) return winner;
    if (arr[i] > winner) {
      winner = arr[i];
      winCount = 1;
    }
    else {
      winCount++;
    }
  }

  return winner;
};

const arr = [2,1,3,5,4,6,7], k = 2;
console.log(getWinner(arr, k));