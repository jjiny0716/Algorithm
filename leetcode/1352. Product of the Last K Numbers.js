var ProductOfNumbers = function () {
  this.pPro = [1];
};

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (num) {
  if (num === 0) this.pPro = [1];
  else this.pPro.push(this.pPro.at(-1) * num);
};

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {
  if (k >= this.pPro.length) return 0;
  return this.pPro.at(-1) / this.pPro[this.pPro.length - k - 1];
};
