/**
 * @param {number[]} rains
 * @return {number[]}
 */
 var avoidFlood = function (rains) {
  const noRains = [];
  const fullLakeMap = new Map();
  const driedMap = {};

  for (let i = 0; i < rains.length; i++) {
    const rain = rains[i];
    if (rain) {
      if (fullLakeMap.get(rain) !== undefined) {
        if (!noRains.length || noRains.at(-1) < fullLakeMap.get(rain)) return [];

        const closest = binarySearch(noRains, fullLakeMap.get(rain));
        driedMap[noRains[closest]] = rain;
        noRains.splice(closest, 1);
      } 
      fullLakeMap.set(rain, i);
    } 
    else {
      noRains.push(i);
    }
  }

  return rains.map((rain, i) => (rain ? -1 : driedMap[i] || 1));
};

function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) right = mid - 1;
    else left = mid + 1;
  }

  return left;
}

const rains = [1, 0, 2, 0, 3, 0, 2, 0, 0, 0, 1, 2, 3];
console.log(avoidFlood(rains));
[-1, 1, -1, 2, -1, 3, -1, 1, 1, 1, -1, -1, -1];
