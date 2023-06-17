/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return (x) => functions.reduceRight((acc, fn) => fn(acc), x);
};