/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
  const map = {};
  let i = 0, j; 
  let result = Infinity;
  for (j = 0 ; j < cards.length ; j++) {
    map[cards[j]] = (map[cards[j]] || 0) + 1;
    if (map[cards[j]] === 2) result = Math.min(result, j - i + 1);
    while (map[cards[j]] === 2) {
      map[cards[i]]--;
      i++;
    }
  }

  return result === Infinity ? -1 : result;
};

const cards = [3,4,2,3,4,7];
console.log(minimumCardPickup(cards));