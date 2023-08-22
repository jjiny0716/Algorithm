var UndergroundSystem = function() {
  this.travelTimeMap = {};
  this.customerMap = {};
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
  this.customerMap[id] = { stationName, t };
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
  const stationName2 = this.customerMap[id].stationName;
  const travelTime = t - this.customerMap[id].t;
  if (!this.travelTimeMap[stationName2]) this.travelTimeMap[stationName2] = {};
  if (!this.travelTimeMap[stationName2][stationName]) this.travelTimeMap[stationName2][stationName] = { totalTime: 0, count: 0 };
  this.travelTimeMap[stationName2][stationName].totalTime += travelTime;
  this.travelTimeMap[stationName2][stationName].count++;
}

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
  const { totalTime, count } = this.travelTimeMap[startStation][endStation];
  return totalTime / count;
};