/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) return mid;
      else if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return left;
  }
  
  let maxRadius = 0;
  heaters.sort((a, b) => a - b);
  for (let i = 0; i < houses.length; i++) {
    const idx = binarySearch(heaters, houses[i]);
    if (idx === 0) maxRadius = Math.max(maxRadius, Math.abs(houses[i] - heaters[idx]));
    else if (idx === heaters.length) maxRadius = Math.max(maxRadius, Math.abs(houses[i] - heaters[idx - 1]));
    else {
      const closestHeaterDistance = Math.min(Math.abs(houses[i] - heaters[idx - 1]), Math.abs(houses[i] - heaters[idx]));
      maxRadius = Math.max(maxRadius, closestHeaterDistance);
    }
  }

  return maxRadius;
};

const houses = [1,2,3], heaters = [2];

console.log(findRadius(houses, heaters));
