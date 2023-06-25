/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function(obj) {
  if (obj instanceof Array) {
    for (let i = 0 ; i < obj.length ; i++) {
      if (Boolean(obj[i]) === false) {
        obj.splice(i, 1);
        i--;
      }
      else compactObject(obj[i]);
    }
  }
  else if (obj instanceof Object) {
    for (const key of Object.keys(obj)) {
      if (Boolean(obj[key]) === false) {
        delete obj[key];
      }
      else compactObject(obj[key]);
    }
  }

  return obj;
};

const obj = [null, 0, 5, [0], [false, 16]];
console.log(compactObject(obj));