/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function (nums1, nums2) {
  const buildElementCountTable = (arr) =>
    arr.reduce((map, element) => {
      map.set(element, (map.get(element) || 0) + 1);
      return map;
    }, new Map());
  this.nums1 = nums1;
  this.nums2 = nums2;
  this.nums1CountTable = buildElementCountTable(nums1);
  this.nums2CountTable = buildElementCountTable(nums2);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function (index, val) {
  this.nums2CountTable.set(
    this.nums2[index],
    this.nums2CountTable.get(this.nums2[index]) - 1
  );
  this.nums2[index] += val;
  this.nums2CountTable.set(
    this.nums2[index],
    (this.nums2CountTable.get(this.nums2[index]) || 0) + 1
  );
};

/**
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function (tot) {
  return [...this.nums1CountTable.keys()].reduce((count, key) => {
    return (
      count +
      this.nums1CountTable.get(key) * (this.nums2CountTable.get(tot - key) || 0)
    );
  }, 0);
};
