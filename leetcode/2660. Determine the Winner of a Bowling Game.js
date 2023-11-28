/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
  const getScore = (player) => {
    let lastTenCount = 0;
    let score = 0;
    for (let i = 0 ; i < player.length ; i++) {
      score += player[i] * (lastTenCount ? 2 : 1);
      if (player[i] === 10) lastTenCount++;
      if (player[i - 2] === 10) lastTenCount--;
    }
    
    return score;
  }
  const score1 = getScore(player1);
  const score2 = getScore(player2);
  if (score1 > score2) return 1;
  else if (score1 < score2) return 2;
  return 0;
};

const player1 = [5,6,1,10], player2 = [5,1,10,5];
console.log(isWinner(player1, player2));