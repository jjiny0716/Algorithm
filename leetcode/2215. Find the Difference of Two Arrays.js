/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const result1 = [...set1.values()].reduce((arr, value) => { 
    set2.has(value) || arr.push(value);
    return arr;
  }, []);
  const result2 = [...set2.values()].reduce((arr, value) => { 
    set1.has(value) || arr.push(value);
    return arr;
  }, []);

  return [result1, result2];
};

const nums1 = [1,2,3], nums2 = [2,4,6];
console.log(findDifference(nums1, nums2));