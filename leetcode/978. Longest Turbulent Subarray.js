/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {
  let result = 1;
  let curLength = 1, lastDir = "";
  for (let i = 1 ; i < arr.length ; i++) {
    if (arr[i - 1] > arr[i]) {
      if (!lastDir || lastDir === "increase") {
        curLength++;
        result = Math.max(result, curLength);
      }
      else curLength = 2;
      lastDir = "decrease";
    }
    else if (arr[i - 1] < arr[i]) {
      if (!lastDir || lastDir === "decrease") {
        curLength++;
        result = Math.max(result, curLength);
      }
      else curLength = 2;
      lastDir = "increase";
    }
    else {
      curLength = 1;
      lastDir = "";
    }
  }

  return result;
};

const arr = [5,4,6,3,7];
console.log(maxTurbulenceSize(arr));


// 간단한 1 pass들

// public int maxTurbulenceSize(int[] A) {
//   int pre = 0, cur = 0, len = 1, res = 1; 
//   for (int i = 1; i < A.length; i++) {
//       cur = Integer.compare(A[i], A[i - 1]);
//       if (cur * pre == -1) len++;
//       else if (cur == 0) len = 1; 
//       else len = 2; 
//       res = Math.max(res, len); 
//       pre = cur; 
//   }
//   return res; 
// }

// class Solution {
//   public int maxTurbulenceSize(int[] A) {
//       int inc = 1, dec = 1, result = 1;
//       for (int i = 1; i < A.length; i++) {
//           if (A[i] < A[i - 1]) {
//               dec = inc + 1;
//               inc = 1;
//           } else if (A[i] > A[i - 1]) {
//               inc = dec + 1;
//               dec = 1;
//           } else {
//               inc = 1;
//               dec = 1;
//           }
//           result = Math.max(result, Math.max(dec, inc));
//       }
//       return result;
//   }
// }