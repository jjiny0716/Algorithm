var MapSum = function() {
  this.prefixMap = new Map();
  this.stringMap = new Map();
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  const diff = val - (this.stringMap.get(key) || 0);
  for (let i = 1 ; i <= key.length ; i++) {
    const prefix = key.slice(0, i);
    this.prefixMap.set(prefix, (this.prefixMap.get(prefix) || 0) + diff);
  }

  this.stringMap.set(key, val);

  return null;
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  return this.prefixMap.get(prefix) || 0;
};
