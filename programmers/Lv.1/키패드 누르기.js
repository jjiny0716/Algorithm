function solution(numbers, hand) {
  const keyPadPos = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  let result = "";
  let leftPos = "*",
    rightPos = "#";

  for (let num of numbers) {
    if (num === 1 || num === 4 || num === 7) {
      result += "L";
      leftPos = num;
    } else if (num === 3 || num === 6 || num === 9) {
      result += "R";
      rightPos = num;
    } else {
      if (getDistanceInKeyPad(leftPos, num) < getDistanceInKeyPad(rightPos, num)) {
        result += "L";
        leftPos = num;
      } else if (getDistanceInKeyPad(leftPos, num) > getDistanceInKeyPad(rightPos, num)) {
        result += "R";
        rightPos = num;
      } else {
        if (hand === "left") {
          result += "L";
          leftPos = num;
        } else {
          result += "R";
          rightPos = num;
        }
      }
    }
  }

  function getDistanceInKeyPad(pos1, pos2) {
    return Math.abs(keyPadPos[pos1][0] - keyPadPos[pos2][0]) + Math.abs(keyPadPos[pos1][1] - keyPadPos[pos2][1]);
  }

  return result;
}
