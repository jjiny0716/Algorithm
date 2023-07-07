/**
 * @param {string} s
 * @return {number}
 */
var minimumCost = function (s) {
  const oneLeftCost = [0],
    oneRightCost = [0];
  const zeroLeftCost = [0],
    zeroRightCost = [0];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      oneLeftCost.push(
        oneLeftCost.at(-1) + (s[i - 1] === "1" ? i + (i + 1) : 1)
      );
      zeroLeftCost.push(zeroLeftCost.at(-1));
    } else {
      oneLeftCost.push(oneLeftCost.at(-1));
      zeroLeftCost.push(
        zeroLeftCost.at(-1) + (s[i - 1] === "0" ? i + (i + 1) : 1)
      );
    }
  }

  for (let i = s.length - 1; i >= 0; i--) {
    const reverseI = s.length - i - 1;
    if (s[i] === "0") {
      oneRightCost.push(
        oneRightCost.at(-1) + (s[i + 1] === "1" ? reverseI + (reverseI + 1) : 1)
      );
      zeroRightCost.push(zeroRightCost.at(-1));
    } else {
      oneRightCost.push(oneRightCost.at(-1));
      zeroRightCost.push(
        zeroRightCost.at(-1) +
          (s[i + 1] === "0" ? reverseI + (reverseI + 1) : 1)
      );
    }
  }

  let oneCost = Infinity,
    zeroCost = Infinity;
  for (let i = 0; i <= s.length; i++) {
    oneCost = Math.min(oneCost, oneLeftCost[i] + oneRightCost[s.length - i]);
    zeroCost = Math.min(
      zeroCost,
      zeroLeftCost[i] + zeroRightCost[s.length - i]
    );
  }

  return Math.min(oneCost, zeroCost);
};

const s = "010101";
console.log(minimumCost(s));

// 1 1 6 6 15 15
//23 12 12 3 3 0
