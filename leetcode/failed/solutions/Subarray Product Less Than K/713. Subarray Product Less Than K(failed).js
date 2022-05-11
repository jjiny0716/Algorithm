/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// O(n^3)?? .o.;;
// var numSubarrayProductLessThanK = function (nums, k) {
//   let count = 0;
//   for (let size = 1 ; size <= nums.length ; size++) {
//     for (let i = 0 ; i <= nums.length - size ; i++) {
//       let product = 1;
//       for (let j = 0 ; j < size ; j++) {
//         product *= nums[i + j];
//       }
//       console.log(product);
//       if (product < k) count++;
//     }
//   }
  
//   return count;
// };

// console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let count = 0;
  const n = nums.length;
  const products = Array.from({length: n}, (v, i) => Array.from({length: n - i}));
  products[0] = nums;
  products[n - 1][0] = nums.reduce((product, v) => product * v, 1);
  console.log(products);

  for (let y = n - 1; y > 1 ; y--) {
    for (let x = 0 ; x < products[y].length ; x++) {
      products[y - 1][x] = products[y][x] / products[0][y + x];
      if (products[y - 1][x] < k) count++;
    }
    products[y - 1][products[y].length] = products[y][products[y].length - 1] / products[0][products[y].length - 1];
    if (products[y - 1][products[y].length] < k) count++;
  }
  for (let i = 0 ; i < n ; i++) 
    if (nums[i] < k) count++;
  if (products[n - 1][0] < k) count++;
  console.log(products);
  return count;
};

console.log(numSubarrayProductLessThanK([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9999));
