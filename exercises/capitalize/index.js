// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	var result = [];
	for (word of str.split(' ')) {
		result.push(word[0].toUpperCase() + word.slice(1));
	};
	// str.split(' ').forEach((letter)=> {
	// 	var capitalized = letter[0].toUpperCase();

	// 	var newLetterArray = letter.split('');
	// 	newLetterArray.splice(0,1,capitalized);
	// 	var newLetter = newLetterArray.join('');
	// 	result.push(newLetter);
	// });
	return result.join(' ');
}

module.exports = capitalize;
