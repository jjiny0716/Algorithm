/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  const ruleKeyIndexMap = {
    type: 0,
    color: 1,
    name: 2,
  };
  const ruleKeyIndex = ruleKeyIndexMap[ruleKey];
  return items.filter((item) => item[ruleKeyIndex] === ruleValue).length;
};
