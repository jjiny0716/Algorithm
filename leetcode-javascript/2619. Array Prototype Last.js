Array.prototype.last = function() {
  return this.length ? this.at(-1) : -1;
}

console.log([1, 2].last());

