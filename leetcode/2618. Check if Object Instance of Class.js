/**
 * @param {Object} object
 * @param {Function} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  while (obj !== undefined && obj !== null) {
    if (obj.constructor === classFunction) {
      return true;
    }

    obj = Object.getPrototypeOf(obj);
  }

  return false;
};

console.log(checkIfInstanceOf(1, String));