function numberOfPairs(gloves) {
  const m = new Map();

  for (let glove of gloves) {
    if (m.get(glove) === undefined) m.set(glove, 0);
    m.set(glove, m.get(glove) + 1);
  }

  let count = 0;
  Array.from(m).forEach(gloveInfo => count += Math.floor(gloveInfo[1] / 2));

  return count;
}

const gs = ['gray','black','purple','purple','gray','black'];
console.log(numberOfPairs(gs));