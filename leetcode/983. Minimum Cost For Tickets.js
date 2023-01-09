/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  const dp = new Array(395).fill(-1);
  const helper = (i = 0, passedDay = 0) => {
    if (dp[passedDay] !== -1) return dp[passedDay];
    if (i >= days.length) return 0;
    if (days[i] <= passedDay) return dp[passedDay] = helper(i + 1, passedDay);

    return dp[passedDay] = Math.min(costs[0] + helper(i + 1, days[i]), costs[1] + helper(i + 1, days[i] + 6), costs[2] + helper(i + 1, days[i] + 29));
  }

  return helper();
};

const days = [1,4,6,7,8,365], costs = [2,7,15];
console.log(mincostTickets(days, costs));