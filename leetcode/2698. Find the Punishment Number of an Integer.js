/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function (n) {
  const makeTargetWithSubstring = (target, n) => {
    if (target < 0) return false;
    if (target === Number(n)) return true;

    if (n.length === 1) {  
      return false;
    }

    let result = false;
    for (let i = 1; i < n.length; i++) {
      const substr1 = n.slice(0, i);
      const substr2 = n.slice(i, n.length);
      result =
        result || makeTargetWithSubstring(target - Number(substr1), substr2);
    }

    return result;
  };

  const isPunishmentNumber = (n) => {
    return makeTargetWithSubstring(n, (n * n).toString());
  };

  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += isPunishmentNumber(i) ? i ** 2 : 0;
  }

  return result;
};

const n = 37;
console.log(punishmentNumber(n));
