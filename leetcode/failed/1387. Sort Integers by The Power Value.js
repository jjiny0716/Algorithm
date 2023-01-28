/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
  const powerValueOfInt = new Array(3000).fill(-1);
  powerValueOfInt[1] = 0;
  let integers = [];
  for (let i = lo ; i <= hi ; i++) {
    integers.push(i);
  }

  const intToPowerValue = (int) => {
    if (powerValueOfInt[int] !== -1) return powerValueOfInt[int];

    const passedValues = [int];
    let i = int;
    while (i !== 1) {
      if (i % 2 === 0) i /= 2;
      else i = i * 3 + 1;
      passedValues.push(i);

      if (powerValueOfInt[i] !== -1) {
        for (let j = 0 ; j < passedValues.length ; j++) {
          powerValueOfInt[passedValues[j]] = powerValueOfInt[i] + passedValues.length - j - 1;
        }
        return powerValueOfInt[int];
      }
    }
  }

  return integers.map((a) => intToPowerValue(a));

  return integers.sort((a, b) => {
    const aPower = intToPowerValue(a);
    const bPower = intToPowerValue(b);

    return aPower === bPower ? a - b : aPower - bPower;
  })[k - 1];
};

const lo = 1, hi = 1, k = 1;
console.log(getKth(lo, hi, k));