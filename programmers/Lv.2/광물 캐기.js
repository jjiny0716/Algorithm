function solution(picks, minerals) {
  const pickCost = {
    0: {
      diamond: 1,
      iron: 1,
      stone: 1,
    },
    1: {
      diamond: 5,
      iron: 1,
      stone: 1,
    },
    2: {
      diamond: 25,
      iron: 5,
      stone: 1,
    },
  };
  
  const find = (picks, index) => {
    if (picks.reduce((prev, cur) => prev + cur) === 0) return 0;
    if (index >= minerals.length) return 0;
    const scores = [];

    for (let i = 0 ; i < 3 ; i++) {
      if (!picks[i]) continue;

      picks[i]--;
      let score = 0;
      for (let j = index ; j < index + 5 && j < minerals.length ; j++) {
        score += pickCost[i][minerals[j]];
      }
      scores.push(score + find(picks, index + 5));
      picks[i]++;
    }

    return scores.sort((a, b) => a - b)[0];
  };

  return find(picks, 0);
}

const picks = [0, 1, 1],
  minerals = ["diamond", "diamond", "diamond", "diamond", "diamond", "iron", "iron", "iron", "iron", "iron", "diamond"];
console.log(solution(picks, minerals));
