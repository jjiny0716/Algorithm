var SmallestInfiniteSet = function() {
  this.cur = 1;
  this.addedNumSet = new Set();
  this.heap = [];
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
  if (this.heap.length === 0) return this.cur++;

  const smallest = this.heap.shift();
  this.addedNumSet.delete(smallest);
  return smallest;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
  if (num >= this.cur || this.addedNumSet.has(num)) return;
  this.addedNumSet.add(num);
  this.heap.push(num);
  this.heap.sort((a, b) => a - b);
};