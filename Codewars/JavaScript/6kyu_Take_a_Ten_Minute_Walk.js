function isValidWalk(walk) {
  const m = new Map();
  for (let char of walk) {
    if (!m.get(char)) m.set(char, 0);
    m.set(char, m.get(char) + 1);
  }

  return m.get('n') === m.get('s') && m.get('w') === m.get('e') && walk.length === 10;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));