/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// beats 10%
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  const result = [];
  const resultMap = {};
  for (let i = 1 ; i < nums.length - 1 ; i++) {
    const target = -nums[i];
    let left = 0;
    let right = nums.length - 1;
    while (i !== left && i !== right) {
      if (target === nums[left] + nums[right]) {
        if (!resultMap[nums[left].toString() + nums[i] + nums[right]]) result.push([nums[left], nums[i], nums[right]]);
        resultMap[nums[left].toString() + nums[i] + nums[right]] = true;
        if (left === i - 1 && right === i + 1) break;
        else if (left === i - 1) right--;
        else left++;
      }
      else if (target < nums[left] + nums[right]) {
        if (right === i + 1) break;
        right--;
      }
      else {
        if (left === i - 1) break;
        left++;
      }
    }
  }

  return result;
};

const nums = [-2,0,0,2,2];
console.log(threeSum(nums));

// 문제점
// 1. map을 사용함.
// 2. target으로 저장할 필요 없음.
// 3. 가운데 축을 둘 필요가 없음.
// 4. 같은 숫자면 건너뛰면 됨.
// 5. 세숫자의 합이 0이면, left와 right를 둘다 변경시켜도 됨.
