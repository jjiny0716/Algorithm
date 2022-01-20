function packBagpack(scores, weights, capacity) {
  m = [];
  for (let i = 0 ; i <= scores.length ; i++) m.push([]);

  for (let itemCount = 0 ; itemCount <= scores.length ; itemCount++) {
    for (let totalWeight = 0 ; totalWeight <= capacity ; totalWeight++) {
      // (l, w) => Math.max(l, weights[i] <= w && load[w - weights[i]] + scores[i]) 
      if (itemCount === 0 || totalWeight === 0) {
        m[itemCount][totalWeight] = 0;
      } 
      else if (weights[itemCount - 1] > totalWeight) {
        m[itemCount][totalWeight] = m[itemCount - 1][totalWeight];
      }
      else {
        m[itemCount][totalWeight] = Math.max(m[itemCount - 1][totalWeight], m[itemCount - 1][totalWeight - weights[itemCount - 1]] + scores[itemCount - 1]);
      }

    }
  }

  return m[scores.length][capacity];
}

console.log(packBagpack([15, 10, 9, 5], [1, 5, 3, 4], 8));

// better version (무게만 이용)
function packBagpack2(scores, weights, capacity) {
  let m = Array.from({ length: capacity + 1 }, () => 0);

  m.map()
}