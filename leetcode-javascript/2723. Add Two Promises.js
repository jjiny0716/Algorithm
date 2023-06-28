/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
  return (await Promise.all([promise1, promise2])).reduce((prev, cur) => prev + cur);
};
