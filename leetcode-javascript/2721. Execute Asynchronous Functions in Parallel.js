/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
  let count = functions.length;
  const results = new Array(functions.length);
  return new Promise((resolve, reject) => {
    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((result) => {
          count--;
          results[i] = result;
          if (count === 0) resolve(results);
        })
        .catch(reject);
    }
  });
};
