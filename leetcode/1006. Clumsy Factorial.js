/**
 * @param {number} n
 * @return {number}
 */
var clumsy = function(n) {
  const nums = [n];
  let seq = 0;
  for (let i = n - 1 ; i > 0 ; i--) {
    if (seq % 4 === 0) {
      nums.push(nums.pop() * i);
    }
    else if (seq % 4 === 1) {
      nums.push(Math.floor(nums.pop() / i));
    }
    else if (seq % 4 === 2) {
      nums.push(i);
    }
    else if (seq % 4 === 3) {
      nums.push(i);
    }
    seq++;
  }

  let result = nums[0];
  for (let i = 1 ; i < nums.length ; i++) result += i % 2 === 1 ? nums[i] : -nums[i]; 

  return result;
};

console.log(clumsy(10));