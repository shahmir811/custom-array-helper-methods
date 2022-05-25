/**
 * Simple implementation of Array.prototype.filter
 * @author ShahmirKhanJadoon
 */

Array.prototype.customFilter = function (callback) {
	if (!callback || typeof callback !== 'function') {
		throw Error('The callback provided is not a function');
	}

	if (!this) {
		throw Error('Cannot call filter on null or undefined');
	}

	const newArray = [];

	for (let i = 0; i < this.length; i++) {
		const passesTest = callback(this[i], i, this);

		if (passesTest) {
			newArray.push(this[i]);
		}
	}

	return newArray;
};
