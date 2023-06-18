/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
  const resultObject = {};
  for (const item of this) {
    const key = fn(item);
    if (resultObject[key] === undefined) resultObject[key] = [];
    resultObject[k].push(item);
  }
};

