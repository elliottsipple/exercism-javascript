var alpha = 'abcdefghijklmnopqrstuvwxyz';

var generateKey = function () {
	return Array.apply(null, Array(100)).map(function () {
		return alpha.charAt(Math.floor(Math.random() * alpha.length));
	}).join('');
}

var cipher = function (key, inText, sign) {
	return inText.split('').reduce(function (outText, letter, i) {
		var offset = sign * alpha.indexOf(key.charAt(mod(i, key.length)));
		outText += alpha.charAt(mod(alpha.indexOf(letter) + offset, alpha.length));
		return outText;
	}, '');
}

var mod = function (n, m) {
	return (((n % m) + m) % m);
}

module.exports = function (key) {
	if (key === undefined) key = generateKey();
	else if (key.length === 0 || key.match(/[^a-z]/, 'g')) throw Error('Bad key');
	return {
		key: key,
		encode: function (plainText) {
			return cipher(this.key, plainText, 1);
		},
		decode: function (encodedText) {
			return cipher(this.key, encodedText, -1);
		}
	};
};