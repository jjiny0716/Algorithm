/**
 * @param {number[]} nums
 */
var ArrayWrapper = function (nums) {
  this.nums = [...nums];
};

ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((prev, cur) => prev + cur, 0);
};

ArrayWrapper.prototype.toString = function () {
  return `[${this.nums.join(",")}]`;
};


const obj1 = new ArrayWrapper([]);
const obj2 = new ArrayWrapper([]);
console.log(obj1 + obj2);
String(obj1); // "[1,2]"
String(obj2); // "[3,4]"
