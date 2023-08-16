/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} numWanted
 * @param {number} useLimit
 * @return {number}
 */
var largestValsFromLabels = function (values, labels, numWanted, useLimit) {
  const n = values.length;
  const items = [];
  for (let i = 0; i < n; i++) {
    items.push({ value: values[i], label: labels[i] });
  }
  items.sort((a, b) => b.value - a.value);

  const labelMap = new Map();
  let ans = 0, itemCount = 0;
  for (const { value, label } of items) {
    if (labelMap.get(label) === useLimit) continue;

    ans += value;
    labelMap.set(label, (labelMap.get(label) ?? 0) + 1);
    itemCount++;
    if (itemCount === numWanted) break;
  }

  return ans;
};

const values = [5, 4, 3, 2, 1],
  labels = [1, 1, 2, 2, 3],
  numWanted = 3,
  useLimit = 1;
console.log(largestValsFromLabels(values, labels, numWanted, useLimit));
