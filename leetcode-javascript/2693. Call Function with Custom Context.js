/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function(context, ...args) {
  return this.apply(context, args);
}

/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function(context, ...args) {
  return Object.defineProperty(context, "__fn__", {
    value: this,
    enumerable: false,
  }).__fn__(...args);
}

/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function(context, ...args) {
  const key = Symbol();
  context[key] = this;

  const result = context[key](...args);
  delete context[key];

  return result;
}
