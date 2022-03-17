/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  const tripMap = {};
  for (let [numPassengers, from, to] of trips) {
    tripMap[from] ? tripMap[from] += numPassengers : tripMap[from] = numPassengers;
    tripMap[to] ? tripMap[to] -= numPassengers : tripMap[to] = -numPassengers;
  }
  const tripData = Object.entries(tripMap).sort((a, b) => a[0] - b[0]);

  let currentPassengerCount = 0;
  for (let [location, passengerDiff] of tripData) {
    currentPassengerCount += passengerDiff;
    if (currentPassengerCount > capacity) return false;
  }

  return true;
};

const trips = [[4,5,6],[6,4,7],[4,3,5],[2,3,5]], capacity = 13;
console.log(carPooling(trips, capacity));

