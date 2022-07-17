/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
  const map = new Map();
  let result = 0;
  for (let i = 0 ; i < nums.length ; i++) {
    for (let j = i + 1 ; j < nums.length ; j++) {
      const [a, b] = [nums[i], nums[j]];
      result += (map.get(a * b) || 0) * 8;
      map.set(a * b, (map.get(a * b) || 0) + 1);
    }
  }
  
  return result;
};

const nums = [1,2,4,5,10];
console.log(tupleSameProduct(nums));


/*
  function makeCombination(arr, visitedSet = new Set(), targetArr = [], resultArr = []) {
    if (targetArr.length === arr.length) {
      resultArr.push([...targetArr]);
      return;
    } 

    for (let i = 0 ; i < arr.length ; i++) {
      if (visitedSet.has(i)) continue;
      visitedSet.add(i); 
      targetArr.push(arr[i]);
      makeCombination(arr, visitedSet, targetArr, resultArr);
      targetArr.pop();
      visitedSet.delete(i);
    }

    return resultArr;
  }


*/