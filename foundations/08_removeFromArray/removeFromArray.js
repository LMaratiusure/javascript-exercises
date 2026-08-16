// const removeFromArray = function(arr, num) {
//     for (let item of Array.from(arguments)) {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] === item) {
//                 arr.splice(i, 1);
//                 i--;
//             }
//         }
//     }
//     return arr;
// };

// other version
const removeFromArray = function(arr, ...args) {
    return arr.filter(item => !args.includes(item));
}

// Do not edit below this line
module.exports = removeFromArray;
