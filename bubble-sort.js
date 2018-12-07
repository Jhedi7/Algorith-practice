

// ************* SWAPING HELPER FUNCTION **********

const swap = (arr, idx1, idx2) => {
    [ arr[idx1], arr[idx2] ]  = [ arr[idx2], arr[idx1] ];
}

const bubbleSort = () => {

}



console.log(bubbleSort([2,5,4,6,5,5,7,7,3,5,2]))








// ************** HOW JS .SORT TAKES PARAMS ***************

// let arr = [4, 2, 4, 6, 7, 7,5, 9]

// arr.sort((num1, num2) => {
//     return num1 - num2;
    //or str1.length - str2.length if strings
// })

// console.log(arr)