/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  if (nums.length === 1) return 0;
  if (nums.length === 2 && nums[0] === nums[1]) {
    return 1;
  }

  const evenMap = new Map();
  const oddMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      evenMap.set(nums[i], (evenMap.get(nums[i]) || 0) + 1);
    } else {
      oddMap.set(nums[i], (oddMap.get(nums[i]) || 0) + 1);
    }
  }

  const findBestSecondKeyOfMap = (map) => {
    let best = 0, second = 0;
    for (const key of map.keys()) {
      if (best === 0 || map.get(key) >= map.get(best)) {
        second = best;
        best = key;
      }
      else if (second === 0 || map.get(key) > map.get(second)) {
        second = key;
      }
    }

    return [best, second];
  } 

  const [evenBest, evenSecond] = findBestSecondKeyOfMap(evenMap);
  const [oddBest, oddSecond] = findBestSecondKeyOfMap(oddMap);

  if (evenBest !== oddBest) {
    return nums.length - evenMap.get(evenBest) - oddMap.get(oddBest);
  }


  if (evenSecond === 0 && oddSecond === 0) {
    return Math.floor(nums.length / 2);
  }

  evenMap.set(0, -999999);
  oddMap.set(0, -999999);
  return (
    nums.length -
    Math.max(
      evenMap.get(evenBest) + oddMap.get(oddSecond),
      evenMap.get(evenSecond) + oddMap.get(oddBest)
    )
  );
};

const nums = [4, 4, 4, 4, 3, 4];
console.log(minimumOperations(nums));
