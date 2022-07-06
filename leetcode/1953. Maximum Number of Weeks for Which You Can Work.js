/**
 * @param {number[]} milestones
 * @return {number}
 */
var numberOfWeeks = function(milestones) {
  let max = 0, sum = 0;
  for (let m of milestones) {
    max = Math.max(max, m);
    sum += m;
  }
  return sum + 1 < 2 * max ? 2 * sum - 2 * max + 1 : sum;
};

const milestones = [100000000];
console.log(numberOfWeeks(milestones));





// failed
// milestones[i]의 크기를 고려하지 않음
/**
 * @param {number[]} milestones
 * @return {number}
 */
 var numberOfWeeks2 = function(milestones) {
  milestones.sort((a, b) => b - a);
  const schedule = new Array(milestones.reduce((prev, cur) => prev += cur, 0)).fill(-1);
  let emptyIndex = 0;

  for (let m = 0 ; m < milestones.length ; m++) {
    let milestone = milestones[m];
    let i = emptyIndex, count = milestone;
    emptyIndex = -1;
  
    while (count && i < schedule.length) {
      count--;
      schedule[i] = m;
      if (emptyIndex === -1 && schedule[i + 1] === -1) emptyIndex = i + 1;
      else if (count === 0 && emptyIndex === -1 && schedule[i + 2] === -1) emptyIndex = i + 2;
      i += 2;
    }
  }

  let result = 0;
  while (schedule[result] !== undefined && schedule[result] !== -1) result++;

  return result;
};