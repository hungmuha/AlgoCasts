// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
// 	const vow=['a','e','i','o','u'];
// 	let count=0;
// 	for(let char of str.toLowerCase()) {
// 		if(vow.includes(char)){
// 			count++
// 		}
// 	}
// 	return count;
// }

function vowels(str) {
	const matches = str.match(/[aeiou]/gi);
	return matches? matches.length : 0;
}

//regex note:
// .match =return array of all the matches
// "/[aeiou]/"=check for matches inside of braket
// g = dont stop until find them all
// i = case insensitive

module.exports = vowels;
