function score(dice) {
  const three = [0, 1000, 200, 300, 400, 500, 600];
  const one = [0, 100, 0, 0, 0, 50, 0];
  const count = [0, 0, 0, 0, 0, 0, 0];
  let result = 0;

  for (d of dice) count[d]++;
  for (let i = 1 ; i < 7 ; i++) {
    result += Math.floor(count[i] / 3) * three[i] + count[i] % 3 * one[i];
  }

  return result;
}


console.log(score([2, 4, 4, 5, 4]));