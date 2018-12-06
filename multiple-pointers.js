// *********************   MULTIPLE POINTERS ***********************

//SUM THAT EQUALS 0

// const sumZero = arr => {
//     let left = 0;
//     let right = arr.length - 1;

//     while( left < right ) {
//         let sum = arr[left] + arr[right];
        
//         if (sum === 0) {
//             console.log(`this is the pair! ${arr[left]} and ${arr[right]}`)
//             return [arr[left], arr[right]]
//         } else if ( sum > 0) {
//             right--;
//         } else {
//             left++;
//         }
//     }
// }

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 2, 10]));

// NUMBER OF EQUAL VALUES

const countUniqueValues = arr => {
    if (arr.length === 0) return 0;

    let i = 0;

    for (let j = 1; j < arr.length; j++){
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
        console.log(i,j)
    }
    return i + 1 ;
}

console.log(countUniqueValues([-1, 1, 3, 3, 3, 4, 5, 5]))