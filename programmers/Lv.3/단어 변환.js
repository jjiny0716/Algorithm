function solution(begin, target, words) {
  const wordLength = words[0].length;
  const map = new Map();
  for (const word of [...words, begin]) {
    for (let i = 0 ; i < wordLength ; i++) {
      const skipped = word.slice(0, i) + word.slice(i + 1, wordLength);
      if (!map.has(skipped)) map.set(skipped, []);
      map.get(skipped).push(word);
    }
  }

  const adj = new Map();
  for (const word of [...words, begin]) {
    const adjWords = new Set();
    for (let i = 0 ; i < wordLength ; i++) {
      const skipped = word.slice(0, i) + word.slice(i + 1, wordLength);
      for (const adjWord of map.get(skipped)) adjWords.add(adjWord);
    }
    adj.set(word, adjWords);
  }

  const queue = [begin];
  const visited = new Set();
  let level = 0;
  while (queue.length) {

    const n = queue.length;
    for (let i = 0 ; i < n ; i++) {
      const here = queue.shift();
      if (here === target) return level;
      if (visited.has(here)) continue;

      visited.add(here);
      if (!adj.has(here)) continue;

      for (const there of [...adj.get(here)]) {
        if (visited.has(there)) continue;
        queue.push(there);
      }
    }

    level++;
  }

  return 0;
}

const begin = "hit",
  target = "cog",
  words = ["hot", "dot", "dog", "lot", "log", "cog"];
console.log(solution(begin, target, words));


// console.log("ASD".slice(0, 0) + "ASD".slice(1, 3));