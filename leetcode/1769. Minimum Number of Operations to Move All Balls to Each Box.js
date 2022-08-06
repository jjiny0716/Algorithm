/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
  let distSum = 0, left = 0, right = 0;
  for (let i = 0 ; i < boxes.length ; i++) {
    if (boxes[i] === '1') {
      distSum += i;
      right++;
    }
  }

  const result = [];
  for (let i = 0 ; i < boxes.length ; i++) {
    result.push(distSum);
    if (boxes[i] === '1') {
      left++;
      right--;
    }
    distSum -= right - left;
  }

  return result;
};

const boxes = "001011";
console.log(minOperations(boxes));
