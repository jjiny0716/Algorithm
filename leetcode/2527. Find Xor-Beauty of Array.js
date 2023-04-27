const xorBeauty = (nums) => nums.reduce((prev, cur) => prev ^ cur);

const nums = [15,45,20,2,34,35,5,44,32,30];
console.log(xorBeauty(nums));
console.log(123 ^ 0);