/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!map[char]) map[char] = [i, i];
    else [map[char][0], map[char][1]] = [Math.min(map[char][0], i), Math.max(map[char][1], i)];
  }

  const partitions = [];
  for (let range of Object.values(map)) {
    let used = false;
    for (let i = 0; i < partitions.length; i++) {
      if (range[0] < partitions[i][1]) {
        if (range[1] > partitions[i][1]) {
          partitions[i][1] = range[1];
        }
        used = true;
      }
    }
    if (!used) {
      partitions.push([...range]);
    }
  }

  return partitions.map((range) => range[1] - range[0] + 1);
};

const s = "ababcbacadefegdehijhklij";
console.log(partitionLabels(s));
