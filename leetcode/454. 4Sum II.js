// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @param {number[]} nums3
//  * @param {number[]} nums4
//  * @return {number}
//  */
// // O(n^4)
// var fourSumCount = function (nums1, nums2, nums3, nums4) {
//   const n = nums1.length;
//   let result = 0;

//   function makeTuples(tuple = []) {
//     if (tuple.length === 4) {
//       if (nums1[tuple[0]] + nums2[tuple[1]] + nums3[tuple[2]] + nums4[tuple[3]] === 0) result++;
//       return;
//     }

//     for (let i = 0; i < n; i++) {
//       tuple.push(i);
//       makeTuples(tuple);
//       tuple.pop();
//     }
//   }

//   makeTuples();

//   return result;
// };

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @param {number[]} nums3
//  * @param {number[]} nums4
//  * @return {number}
//  */
// // O(n^3)
// var fourSumCount = function (nums1, nums2, nums3, nums4) {
//   const n = nums1.length;
//   const map = nums4.reduce((map, num) => {
//     map.set(num, ((map.get(num)) || 0) + 1);
//     return map;
//   }, new Map());
//   let result = 0;

//   function makeTuples(tuple = []) {
//     if (tuple.length === 3) {
//       result += map.get(-(nums1[tuple[0]] + nums2[tuple[1]] + nums3[tuple[2]])) || 0;
//       return;
//     }

//     for (let i = 0; i < n; i++) {
//       tuple.push(i);
//       makeTuples(tuple);
//       tuple.pop();
//     }
//   }

//   makeTuples();

//   return result;
// };

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
// O(n^2)
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const n = nums1.length;
  const map1 = new Map();
  const map2 = new Map();
  
  makeTwoArrToMap(nums1, nums2, map1);
  makeTwoArrToMap(nums3, nums4, map2);

  function makeTwoArrToMap(arr1, arr2, map, tuple = []) {
    if (tuple.length === 2) {
      const sum = arr1[tuple[0]] + arr2[tuple[1]];
      map.set(sum, (map.get(sum) || 0) + 1);
      return;
    }

    for (let i = 0; i < n; i++) {
      tuple.push(i);
      makeTwoArrToMap(arr1, arr2, map, tuple);
      tuple.pop();
    }
  }

  let result = 0;

  for (const key of map1.keys()) {
    result += (map1.get(key) || 0) * (map2.get(-key) || 0)
  }

  return result;
};

const nums1 = [1, 2],
  nums2 = [-2, -1],
  nums3 = [-1, 2],
  nums4 = [0, 2];
console.log(fourSumCount(nums1, nums2, nums3, nums4));
