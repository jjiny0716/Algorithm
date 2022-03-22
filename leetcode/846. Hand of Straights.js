/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  if (hand.length % groupSize !== 0) return false;
  const map = {};
  for (let value of hand) map[value] = (map[value] || 0) + 1;

  const keys = Object.keys(map);
  let keyIdx = 0;
  for (let i = 0 ; i < hand.length / groupSize ; i++) {
    const startKey = Number(keys[keyIdx]);
    for (let j = 0 ; j < groupSize ; j++) {
      if (!map[startKey + j]) return false;
      map[startKey + j]--;
      if (map[startKey + j] === 0) keyIdx++;
    }
  }

  return true;
};
const hand = [1,2,3,6,2,3,4,7,8], groupSize = 3;
console.log(isNStraightHand(hand, groupSize));
