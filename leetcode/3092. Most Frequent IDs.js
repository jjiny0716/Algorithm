/**
 * @param {number[]} nums
 * @param {number[]} freq
 * @return {number[]}
 */
var mostFrequentIDs = function(nums, freq) {
  const pq = new MaxPriorityQueue({ priority: ([n, f]) => f});
  const map = new Map();
  const result = new Array(nums.length);
  for (let i = 0 ; i < nums.length ; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + freq[i]);
      
    while (!pq.isEmpty() && pq.front().element[1] !== map.get(pq.front().element[0])) pq.dequeue();
    
    pq.enqueue([nums[i], map.get(nums[i])]);

    result[i] = pq.front().element[1];
  }
  
  return result;
};
  
const nums = [2,3,2,1], freq = [3,2,-3,1];
console.log(mostFrequentIDs(nums, freq))