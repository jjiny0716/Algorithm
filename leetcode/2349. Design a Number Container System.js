var NumberContainers = function() {
  this.container = new Map();
  this.smallestIndex = new Map();
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {
  this.container.set(index, number);
  if (!this.smallestIndex.has(number)) this.smallestIndex.set(number, index);
  else {
    this.smallestIndex.set()
  }
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {
    
};

/** 
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */