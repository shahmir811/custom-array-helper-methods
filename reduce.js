/**
 * Simple implementation of Array.prototype.reduce
 * @author ShahmirKhanJadoon
 */

Array.prototype.customReduce = function (callback, initial) {
	if (!callback || typeof callback !== 'function') {
		throw Error('The callback provided is not a function');
	}

	if (!this) {
		throw Error('Cannot call reduce on null or undefined');
	}

	let accumulator = initial || this[0];

	for (let i = 0; i < this.length; i++) {
		if (i === 0 && !initial) {
			continue;
		}

		const newValue = callback(accumulator, this[i], i, this);
		accumulator = newValue;
	}

	return accumulator;
};
