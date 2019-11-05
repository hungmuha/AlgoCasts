// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    // let arr = [root];
    // let result = [1];
    // let levelCounter = 1;
    // while(arr.length) {
    //     if(levelCounter==0) {
    //         levelCounter = arr.length;
    //         result.push(arr.length);
    //     }
    //     let element = arr.shift();
    //     arr.push(...element.children);
    //     levelCounter--;
    // }
    // return result;

    let arr = [root, 's'];
    let result = [0];
    while(arr.length > 1) {
        const element = arr.shift();
        if(element === 's') {
            result.push(0);
            arr.push('s');
        } else {
            arr.push(...element.children);
            result[result.length-1]++;
        }
    }
    return result;
}

module.exports = levelWidth;
