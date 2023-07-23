/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
  const remainDays = dist.map((distance, index) => Math.ceil(distance / speed[index])).sort((a, b) => a - b);
  for (let day = 0 ; day < dist.length ; day++) {
    if (remainDays[day] <= day) return day; 
  }

  return dist.length;
};

const dist = [1,3,4], speed = [1,1,1];
console.log(eliminateMaximum(dist, speed));