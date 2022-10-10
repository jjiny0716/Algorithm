/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
  players.sort((a, b) => b - a);
  trainers.sort((a, b) => b - a);
  let j = 0, result = 0;
  for (let i = 0 ; i < players.length && j < trainers.length ; i++) {
    if (players[i] <= trainers[j]) {
      result++;
      j++;
    }
  }

  return result;
};

const players = [4,7,9], trainers = [8,2,5,8];
console.log(matchPlayersAndTrainers(players, trainers));
