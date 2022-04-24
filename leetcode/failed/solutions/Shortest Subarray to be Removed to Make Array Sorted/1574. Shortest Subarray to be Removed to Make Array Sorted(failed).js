/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function (arr) {
  let start, end;
  for (let i = 0 ; i < arr.length - 1; i++) {
    if (!start && arr[i] > arr[i + 1]) {
      start = i;
      break;
    }
  }
  for (let i = arr.length - 1 ; i > 0 ; i--) {
    if (!end && arr[i - 1] > arr[i]) {
      end = i;
      break;
    }
  }



  if (end - start === arr.length - 1) return end;
  if (!start && !end) return 0;
  start++;
  end--;
  console.log(start, end);
  arr.splice(start, end - start + 1);
  console.log(arr);
  for (let range = 0 ; range < arr.length ; range++) {
    for (let i = -range, j = 0; i <= 0 ; i++, j++) {
      if (arr[start + i - 1] === undefined || arr[start + j] === undefined) continue;
      if (arr[start + i - 1] <= arr[start + j]) return end - start + 1 + range;
    }
  }

  return "?";
};

// console.log(findLengthOfShortestSubarray([1,2,3,10,4,2,3,5]));
console.log(findLengthOfShortestSubarray([2,2,2,1,1,1]));
// console.log(findLengthOfShortestSubarray([1,2,3,4,5,1000,12345,2]));
