/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
	return async function(...args) {
      return new Promise(async (resolve, reject) => {
        setTimeout(() => reject("Time Limit Exceeded"), t);
        fn(...args).then(res => resolve(res)).catch(err => reject(err));
      })
    }
};

fn = async () => { throw "Error"; }
inputs = []
t = 1000
const f = timeLimit(fn, t);
f(...inputs).then((res) => console.log(res)).catch(err => console.error(err));
