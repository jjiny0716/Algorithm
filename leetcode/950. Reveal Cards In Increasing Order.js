/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => a - b);
  const result = [];
  while (deck.length) {
    if (result.length) result.push(result.shift());
    result.push(deck.pop());
  }

  return result.reverse();
};

const deck = [17,13,11,2,3,5,7];
console.log(deckRevealedIncreasing(deck));




