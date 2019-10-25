// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	var chunked = [];
	// for (let i=0; i<array.length; i++) {
	// 	var lastEl = chunked[chunked.length-1];
	// 	if( !lastEl || lastEl.length == size) {
	// 		chunked.push([array[i]]);
	// 	} else {
	// 		lastEl.push(array[i])
	// 	}
	// }

	// var iterate = Math.ceil(array.length/size);
	// for( let i = 0; i<iterate; i++ ) {
	// 	if(array.length<size) {
	// 		var chunk = array.splice(0);
	// 		chunked.push(chunk);
	// 	} else {
	// 		var chunk = array.splice(0,size);
	// 		chunked.push(chunk);
	// 	}
		
	// };

	let index = 0;
	while(index < array.length) {
		chunked.push(array.slice(index,index+size));
		index += size;
	}
	return chunked
}

module.exports = chunk;
