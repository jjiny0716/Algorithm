/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function(cookies, k) {
  const distribution = new Array(k).fill(0);
  let minUnfairness = Infinity;

  const helper = (i = 0) => {
    if (i === cookies.length) {
      minUnfairness = Math.min(minUnfairness, Math.max(...distribution));
      return;
    }

    for (let j = 0 ; j < k ; j++) {
      distribution[j] += cookies[i];
      helper(i + 1);
      distribution[j] -= cookies[i];
    }
  }
  helper();

  return minUnfairness;
};

const cookies = [8,15,10,20,8], k = 2;
console.log(distributeCookies(cookies, k));
