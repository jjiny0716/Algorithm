/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
  const totalTravelTime = [0];
  for (const t of travel) totalTravelTime.push(totalTravelTime.at(-1) + t);
  const garbageInfo = { 
    'M': [0, -1],
    'P': [0, -1],
    'G': [0, -1],
  }
  for (let i = 0 ; i < garbage.length ; i++) {
    const count = {};
    for (const c of garbage[i]) count[c] = (count[c] || 0) + 1;
    for (const key of Object.keys(count)) {
      garbageInfo[key][0] += count[key];
      garbageInfo[key][1] = i; 
    }
  }

  return Object.values(garbageInfo).reduce((time, [count, index]) => index !== -1 ? time + count + totalTravelTime[index] : time, 0);
};

const garbage = ["G","P","GP","GG"], travel = [2,4,3];
console.log(garbageCollection(garbage, travel));