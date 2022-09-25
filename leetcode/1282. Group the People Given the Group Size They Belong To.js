/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
  const map = new Map();
  for (let i = 0 ; i < groupSizes.length ; i++) {
    const size = groupSizes[i];
    if (!map.has(size)) map.set(size, []);
    const sameSizeGroups = map.get(size);
    if (sameSizeGroups.length === 0 || sameSizeGroups.at(-1).length === size) sameSizeGroups.push([]);
    sameSizeGroups.at(-1).push(i);
  }

  return [...map.values()].flat(1);
};

const groupSizes = [3,3,3,3,3,1,3];
console.log(groupThePeople(groupSizes));
