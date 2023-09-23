/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function(price, special, needs) {
  const n = price.length;
  const cache = {};
  let ans = -1;
  const dfs = (needs, totalPrice) => {
    const serializeNeedState = () => needs.join('|');

    if (cache[serializeNeedState()] <= totalPrice) return;
    cache[serializeNeedState()] = totalPrice;

    if (needs.every((e) => e === 0)) {
      ans = cache[serializeNeedState()];
      return;
    }

    // just buy one
    for (let i = 0 ; i < n ; i++) {
      if (needs[i] === 0) continue;
      needs[i]--;
      dfs(needs, totalPrice + price[i]);
      needs[i]++;
    }
    
    // use special offer
    for (const offer of special) {
      for (let i = 0 ; i < offer.length - 1 ; i++) {
        needs[i] -= offer[i];
      }

      if (needs.every((e) => e >= 0)) dfs(needs, totalPrice + offer.at(-1));

      for (let i = 0 ; i < offer.length - 1 ; i++) {
        needs[i] += offer[i];
      }
    }
  }
  dfs(needs, 0);

  return ans;
};

const price = [2,5], special = [[3,0,5],[1,2,10]], needs = [3,2]
console.log(shoppingOffers(price, special, needs));