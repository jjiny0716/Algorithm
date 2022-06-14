/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  if (deck.length === 1) return false;
  const map = {};
  for (let card of deck) {
    map[card] = (map[card] || 0) + 1;
  }

  const counts = Object.values(map);
  for (let i = 0 ; i < counts.length - 1 ; i++) {
    if (counts[i] === 1) return false;
    if (gcd(counts[i], counts[i + 1]) === 1) return false;
  }

  return true;
};

function gcd(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

const deck = [1,1,1,2,2,2,3,3];
console.log(hasGroupsSizeX(deck));