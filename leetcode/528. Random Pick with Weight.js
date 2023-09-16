/**
 * @param {number[]} w
 */
var Solution = function(w) {
  this.minWeight = w[0];
  this.maxWeight = w[0];
  this.weightSpace = [0];
  for (const weight of w) {
    this.minWeight = Math.min(this.minWeight, weight);
    this.maxWeight = Math.max(this.maxWeight, weight);
    this.weightSpace.push(this.weightSpace.at(-1) + weight);
  }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
  const binarySearch = (target) => {
    let left = 0, right = this.weightSpace.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (this.weightSpace[mid - 1] <= target && target < this.weightSpace[mid]) return mid - 1;
      else if (this.weightSpace[mid] <= target && target < this.weightSpace[mid + 1]) return mid;
      else if (target < this.weightSpace[mid]) right = mid - 1;
      else if (target > this.weightSpace[mid]) left = mid + 1;
    }

    return left;
  }

  return binarySearch(Math.floor(Math.random() * this.weightSpace.at(-1)));
};

const w = [3, 14, 1, 7]
var obj = new Solution(w)
var param_1 = obj.pickIndex()
console.log(param_1);