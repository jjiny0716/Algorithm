/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
  const n = distance.length;
  let clockwiseDistance = 0;
  let counterclockwiseDistance = 0;
  for (let i = start ; i !== destination ; i = (i + 1) % n) {
    clockwiseDistance += distance[i];
  }
  for (let i = start ; i !== destination ; i = i === 0 ? n - 1 : i - 1) {
    counterclockwiseDistance += distance[i === 0 ? n - 1 : i - 1];
  }
  
  return Math.min(clockwiseDistance, counterclockwiseDistance);
};

const distance = [1,2,3,4], start = 0, destination = 3;
console.log(distanceBetweenBusStops(distance, start, destination));