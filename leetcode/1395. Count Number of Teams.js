/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
  const getAscendingTeams = (rating) => {
    const dp = {};
    let result = 0;
    for (let i = 1 ; i < rating.length ; i++) {
      for (let j = 0 ; j < i ; j++) {
        if (rating[j] < rating[i]) {
          dp[rating[i]] = (dp[rating[i]] || 0) + 1;
          result += dp[rating[j]] || 0;
        }
      }
    }

    return result;
  }

  return getAscendingTeams(rating) + getAscendingTeams(rating.reverse());
};

const rating = [2,5,3,4,1];
console.log(numTeams(rating));