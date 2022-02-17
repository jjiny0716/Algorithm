/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  const m = new Map();

  makeSubsets(nums, m, result);
  return result;
};

function makeSubsets(cur, m, result) {
  if (!m.get(cur.toString())) {
    result.push([...cur]);
    m.set(cur.toString(), true);
  }
  else return;

  for (let i = 0 ; i < cur.length ; i++) {
    const next = cur.filter((v, idx) => idx !== i);
    makeSubsets(next, m, result);
  }
}

// other
var subsetsWithDup = function(nums) {
        
  nums = nums.sort((a,b) => a-b);
  
  const res = [];
  
  function fn(length, start=0, arr = []) {
      if (arr.length === length) {
          res.push(arr.slice());
          return;
      }
      for(let i=start; i<nums.length; i++) {       
          if (i !== start && nums[i-1] === nums[i]) continue;
          arr.push(nums[i]);
          fn(length, i+1, arr);
          arr.pop();            
      }
  }
  
  for(let length=0; length<=nums.length; length++) {
      fn(length);
  }
  
  return res;
};