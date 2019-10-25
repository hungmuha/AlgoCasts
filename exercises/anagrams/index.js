// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	// var objectA = buildCharMap(stringA);
	// var objectB = buildCharMap(stringB);
	// var result = (function (){
	// 	if(Object.keys(objectA).length !== Object.keys(objectB).length) {
	// 		return false;
	// 	}
	// 	for(letter in objectA) {
	// 		if(objectA[letter]!=objectB[letter]) {
	// 			return false;
	// 		}
	// 	}
	// 	return true;
	// })();
	// return result;
	return cleanString(stringA)===cleanString(stringB);
}

function buildCharMap(string) {
	const charMap= {}
	for(letter of string.replace(/[^\w]/g,'').toLowerCase()) {
		charMap[letter]= charMap[letter]++ || 1;
	}
	return charMap;
}

function cleanString(string) {
	return string.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
