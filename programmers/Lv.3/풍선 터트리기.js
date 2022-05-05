function solution(a) {
  const possibleLastBalloons = new Set();

  let min = Infinity;
  for (let i = 0 ; i < a.length ; i++) {
    min = Math.min(min, a[i]);
    possibleLastBalloons.add(min);
  }

  min = Infinity;
  for (let i = a.length - 1 ; i >= 0 ; i--) {
    min = Math.min(min, a[i]);
    possibleLastBalloons.add(min);
  }

  return possibleLastBalloons.size;
}