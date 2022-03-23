/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  let left = 0, right = people.length - 1;
  let boatCount = 0;
  people.sort((a, b) => a - b);

  while (left <= right) {
    boatCount++;
    if (people[left] + people[right] > limit) right--;
    else {
      left++; 
      right--;
    }
  }

  return boatCount;
};

const people = [3,5,3,4], limit = 5;
console.log(numRescueBoats(people, limit));

// c++이지만 같은 로직을 어떻게 줄일 수 있었나 보기.
// int numRescueBoats(vector<int>& ppl, int limit, int boats = 0) {
//   sort(begin(ppl), end(ppl));
//   for (int i = 0, j = ppl.size() - 1; i <= j; ++boats, --j) {
//     if (ppl[i] + ppl[j] <= limit) ++i;
//   }
//   return boats;
// }