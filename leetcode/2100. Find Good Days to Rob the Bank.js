/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function(security, time) {
  const diff = [];
  for (let i = 1 ; i < security.length ; i++) {
    diff.push(security[i] - security[i - 1]);
  }

  const goodDays = [];
  let leftDecreaseCount = 0, rightIncreaseCount = 0;
  for (let i = 0 ; i < time * 2 ; i++) {
    if (i < time && diff[i] <= 0) leftDecreaseCount++;
    else if (i >= time && diff[i] >= 0) rightIncreaseCount++; 
  }

  const isGoodDay = () => {
    return leftDecreaseCount === time && rightIncreaseCount === time;
  }

  for (let i = time * 2 ; i < security.length ; i++) {
    if (isGoodDay()) goodDays.push(i - time);
    if (diff[i - time * 2] <= 0) leftDecreaseCount--;
    if (diff[i - time] <= 0) leftDecreaseCount++;
    if (diff[i - time] >= 0) rightIncreaseCount--;
    if (diff[i] >= 0) rightIncreaseCount++;
  }

  return goodDays;
};

const security = [5,3,3,3,5,6,2], time = 2;
console.log(goodDaysToRobBank(security, time));