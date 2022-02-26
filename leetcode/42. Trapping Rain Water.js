/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let largestBarHeight = 0;
  let largestBarIndex = 0;
  for (let i = 0 ; i < height.length ; i++) {
    if (height[i] > largestBarHeight) {
      largestBarHeight = height[i];
      largestBarIndex = i;
    }
  }

  let result = 0;
  let leftlargestBarHeight = height[0];
  for (let i = 1 ; i < largestBarIndex ; i++) {
    if (leftlargestBarHeight < height[i]) {
      leftlargestBarHeight = height[i];
    }
    else {
      result += leftlargestBarHeight - height[i];
    }
  }

  let rightlargestBarHeight = height[height.length - 1];
  for (let i = height.length - 2 ; i > largestBarIndex ; i--) {
    if (rightlargestBarHeight < height[i]) {
      rightlargestBarHeight = height[i];
    }
    else {
      result += rightlargestBarHeight - height[i];
    }
  }
  
  return result;
};

const height = [5,4,9999];
console.log(trap(height));

console.log(1 > undefined);

// 투포인터를 이용하면 더 간결하게 작성할 수 있을듯..