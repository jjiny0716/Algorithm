/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  const result = Array.from({ length: num_people }).fill(0);
  for (let i = 0 ; candies > 0 ; i++) {
    const candy = (i + 1 >= candies) ? candies : i + 1;
    result[i % num_people] += candy;
    candies -= candy;
  }
  return result;
};

console.log(distributeCandies(7, 4));
