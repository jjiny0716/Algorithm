/**
 * @param {string} pressedKeys
 * @return {number}
 */
var countTexts = function(pressedKeys) {
  const MOD = 10 ** 14 + 7;
  const threeCharNumbers = new Set(['2', '3', '4', '5', '6', '8']);
  const threeMap = {
    1: 1,
    2: 2,
    3: 4,
  };
  const fourMap = {
    1: 1,
    2: 2,
    3: 4,
    4: 7,
  }

  let lastIndex = 0;
  let result = 1;
  for (let i = 1 ; i <= pressedKeys.length ; i++) {
    if (pressedKeys[i] !== pressedKeys[i - 1] || i === pressedKeys.length) {
      const strLength = i - lastIndex;
      const possibleCharCount = threeCharNumbers.has(pressedKeys[lastIndex]) ? 3 : 4;
      console.log(strLength, possibleCharCount);
      result = (result * getPossibleMessagesCount(strLength, possibleCharCount)) % MOD;
      lastIndex = i;
    }
  }

  function getPossibleMessagesCount(length, possibleCharCount) {
    if (possibleCharCount === 3 && threeMap[length] !== undefined) return threeMap[length];
    if (possibleCharCount === 4 && fourMap[length] !== undefined) return fourMap[length];

    let result = 0;
    for (let i = 1 ; i <= possibleCharCount ; i++) {
      result += ((possibleCharCount === 3 ? threeMap[i] : fourMap[i]) * getPossibleMessagesCount(length - i, possibleCharCount)) % MOD;
    }

    if (possibleCharCount === 3) threeMap[length] = result % MOD;
    if (possibleCharCount === 4) fourMap[length] = result % MOD;
    return result % MOD;
  }

  return result;
};

const pressedKeys = "222222222222222222222222222222222222";
console.log(countTexts(pressedKeys));