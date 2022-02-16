// /**
//  * @param {number[]} height
//  * @return {number}
//  */
// 
// var maxArea = function (height) { // 완전탐색 O(n^2)
//   let max = 0;
//   for (let i = 0 ; i < height.length - 1 ; i++) {
//     for (let j = i + 1 ; j < height.length ; j++) {
//       max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
//     }
//   }

//   return max;
// };


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) { // greedy? O(n)
  let max = 0, left = 0, right = height.length - 1;

  while (left < right) {
    max = Math.max(max, (right - left) * Math.min(height[left], height[right]));
    if (height[left] < height[right]) left++;
    else right--;
  }

  return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
