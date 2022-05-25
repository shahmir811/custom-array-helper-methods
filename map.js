/**
 * Simple implementation of Array.prototype.map
 * @author ShahmirKhanJadoon
 */

Array.prototype.customMap = function (callback) {
	if (!callback || typeof callback !== 'function') {
		throw Error('The callback provided is not a function');
	}

	if (!this) {
		throw Error('Cannot call map on null or undefined');
	}

	const newArray = [];

	for (let i = 0; i < this.length; i++) {
		const newValue = callback(this[i], i, this);
		newArray.push(newValue);
	}

	return newArray;
};
