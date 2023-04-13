/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function (
  restaurants,
  veganFriendly,
  maxPrice,
  maxDistance
) {
  return restaurants
    .filter(([id, rating, vegan]) => vegan >= veganFriendly)
    .filter(([id, rating, vegan, price]) => price <= maxPrice)
    .filter(([id, rating, vegan, price, distance]) => distance <= maxDistance)
    .sort((a, b) => b[1] === a[1] ? b[0] - a[0] : b[1] - a[1])
    .map(([id]) => id);
};

const restaurants = [
    [1, 4, 1, 40, 10],
    [2, 8, 0, 50, 5],
    [3, 8, 1, 30, 4],
    [4, 10, 0, 10, 3],
    [5, 1, 1, 15, 1],
  ],
  veganFriendly = 1,
  maxPrice = 50,
  maxDistance = 10;
console.log(
  filterRestaurants(restaurants, veganFriendly, maxPrice, maxDistance)
);
