/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
  dominoes = dominoes.split('');
  const initialFallingIndexes = [-1];
  for (let i = 0 ; i < dominoes.length ; i++) {
    if (dominoes[i] !== '.') initialFallingIndexes.push(i);
  }
  initialFallingIndexes.push(dominoes.length);

  for (let i = 0 ; i < initialFallingIndexes.length - 1 ; i++) {
    resolveDirectionInRange(initialFallingIndexes[i], initialFallingIndexes[i + 1]);
    console.log(initialFallingIndexes[i], initialFallingIndexes[i + 1], dominoes.join(''));
  }

  function resolveDirectionInRange(i, j) {
    const iDirection = dominoes[i] || 'L';
    const jDirection = dominoes[j] || 'R';
    let l = i + 1, r = j - 1;
    while (l <= r) {
      if (iDirection === 'R' && jDirection === 'R') {
        dominoes[l] = 'R';
        dominoes[r] = 'R';
      }
      else if (iDirection === 'L' && jDirection === 'R') {
        dominoes[l] = '.';
      }
      else if (iDirection === 'R' && jDirection === 'L') {
        if (l === r) dominoes[l] = '.';
        else {
          dominoes[l] = 'R';
          dominoes[r] = 'L';
        }
      }
      else if (iDirection === 'L' && jDirection === 'L') {
        dominoes[l] = 'L';
        dominoes[r] = 'L';
      }
      l++;
      r--;
    }
  }

  return dominoes.join('');
};

const dominoes = ".L.R...LR..L..";
console.log(pushDominoes(dominoes));