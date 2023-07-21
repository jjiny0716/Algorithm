var FrequencyTracker = function() {
  this.numberMap = new Map();
  this.frequencyMap = new Map();
};

/** 
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.add = function(number) {
  const frequency = this.numberMap.get(number) || 0;
  this.numberMap.set(number, frequency + 1);
  this.frequencyMap.set(frequency, (this.frequencyMap.get(frequency) || 0) - 1);
  this.frequencyMap.set(frequency + 1, (this.frequencyMap.get(frequency + 1) || 0) + 1);
};

/** 
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.deleteOne = function(number) {
  const frequency = this.numberMap.get(number) || 0;
  if (frequency === 0) return;
  this.numberMap.set(number, frequency - 1);
  this.frequencyMap.set(frequency, (this.frequencyMap.get(frequency) || 0) - 1);
  this.frequencyMap.set(frequency - 1, (this.frequencyMap.get(frequency - 1) || 0) + 1);
};

/** 
 * @param {number} frequency
 * @return {boolean}
 */
FrequencyTracker.prototype.hasFrequency = function(frequency) {
  return (this.frequencyMap.get(frequency) ?? 0) > 0;
};
