/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
  const toBe = (value) => {
    if (value === val) return true;
    throw new Error("Not Equal");
  }

  const notToBe = (value) => {
    if (value !== val) return true;
    throw new Error("Equal");
  }

  return { toBe, notToBe };
};