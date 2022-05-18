/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
  const players = scores.map((score, i) => [score, ages[i]]);
  players.sort((a, b) => a[1] - b[1]);
  
  console.log(players);

  let result = 0;
  for (let i = 0 ; i < players.length ; i++) {
    let maxScore = 0, maxScoreAge = -1;
    let scoreWhenPickI = 0;
    for (let j = i ; j < players.length ; j++) {
      const [score, age] = players[j];
      if (score < maxScore && age > maxScoreAge) continue;
      console.log(j);
      if (score > maxScore) {
        maxScore = score;
        maxScoreAge = age;
      }
      
      scoreWhenPickI += score;
    }

    console.log(scoreWhenPickI);
    result = Math.max(result, scoreWhenPickI);
  }

  return result;
};

const scores = 
[1,3,7,3,2,4,10,7,5],
ages = [4,5,2,1,1,2,4,1,4];
console.log(bestTeamScore(scores, ages));