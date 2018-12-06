// ************ EXAMPLES **************

// const countDown = num => {
//     if (num <= 0) {
//         console.log('finished!');
//         return;
//     }
//     console.log(num);
//     num--;
//     countDown(num);
// }

// countDown(2)

// const sumRange = num => {
//     if (num === 1) return 1;
//     return num + sumRange(num-1);
// }

// console.log(sumRange(3))

// const factorial = num => {
//     if (num === 1) return 1;
//     return num * factorial(num - 1);
// }

// console.log(factorial(5))

//*****************HELPER METHOD RECURSION */

// const collectOddValues = arr => {

//     let result = [];

//     const helper = helperInput => {
//         if (helperInput.length === 0) {
//             return;
//         }
//         if (helperInput[0] % 2 !==0) {
//             result.push(helperInput[0]);
//         }
//         helper(helperInput.slice(1));
//     }
//     helper(arr);
//     return result;
// }

// console.log(collectOddValues([1,2,3,2,5,6,7,5,9]))


//****************NO HELPER METHOD (PURE RECURSION) */


// const collectOddValues = arr => {
//     let newArr = [];

//     if (arr.length === 0){
//         return newArr;
//     }

//     if(arr[0] % 2 !==0) {
//         newArr.push(arr[0]);
//     }

//     newArr = newArr.concat(collectOddValues(arr.slice(1)));
//     return newArr;
// }

// console.log(collectOddValues([1,2,3,2,5,6,7,5,9,23,12,33]))

// tips when pure recursion and arrays use slice, concat, the spread operator to make copies!
// strings are immutable so use slice, sub string, substr
// objects use object.assign or the spread operator