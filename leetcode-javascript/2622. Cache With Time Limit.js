var TimeLimitedCache = function() {
  this.map = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
  const result = (this.map.get(key) !== undefined && new Date() < this.map.get(key).expireDate);
  const expireDate = new Date();
  expireDate.setMilliseconds(expireDate.getMilliseconds() + duration);
  this.map.set(key, {
    value,
    expireDate,
  })

  return result;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
  const timeCacheValue = this.map.get(key);
  if (!timeCacheValue) return -1;
  if (new Date() > timeCacheValue.expireDate) return -1;
  return timeCacheValue.value;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
  const currentDate = new Date();
  return [...this.map.values()].filter(({expireDate}) => currentDate < expireDate).length;
};
