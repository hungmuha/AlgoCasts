// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//     var totalRow = n;
//     var totalColumn = 2*n-1;
//     var center = Math.floor(totalColumn/2);
//     for(let row=0; row<totalRow; row++) {
//         let print = '';
//         for(let column=0; column<totalColumn; column++) {
//             if(column>=center-row && column<=center+row) {
//                 print+='#';
//             } else {
//                 print+=' ';
//             }
//         }
//         console.log(print);
//     }
// }

//Recursion
function pyramid(n, row=0,level='') {
    totalcolumn = 2*n-1;
    center=Math.floor(totalcolumn/2);
    if(n===row){
        return;
    }
    if(level.length === totalcolumn) {
        console.log(level);
        return pyramid(n,row+1);
    }
    if(level.length>=center-row && level.length<=center+row){
        level+="#";   
    }else {
        level+=" ";
    }
    pyramid(n,row,level);
}

module.exports = pyramid;
