// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	var letters={};
	str.split('').forEach((letter) => {
		if(letters[letter]) { 
			letters[letter]++ 
		} else {
			letters[letter] = 1;
		}
	});
	var result = Object.keys(letters).reduce((a,b) => {
		return letters[a] > letters[b] ? a:b
	});
	return result;
}

module.exports = maxChar;
