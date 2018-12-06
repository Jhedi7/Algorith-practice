//***********FREQUENCY COUNTERS************/

//(bad solution)




// const same = (arr1, arr2) => {

//     if(arr1.length !== arr2.length){
//         console.log('they have different lengths!')
//     } 
//     for (let i = 0; i <arr1.legth; i++){
//         let correctIndex = arr2.indexOf(arr[1] ** 2)
//         if(correctIndex === -1){
//             console.log(`it doesnt work! ${arr1} and ${arr2}`)
//         }
//         console.log(arr2)
//         arr2.splice(correctIndex, 1)
//     }
//     console.log(`it works! ${arr1} and ${arr2}`)
// }

// same(firstArr, secondArr)

//****CORRECT SOLUTION**** */

// const same  = (arr1, arr2) => {
//     if(arr1.length !== arr2.length){
        //console.log('not the same length!')
    //     return false
    // }

    // let frequencyCounter1 = {}
    // let frequencyCounter2 = {}

    // for (let index of arr1){
    //     frequencyCounter1[index] = (frequencyCounter1[index] || 0) + 1
    //     //console.log(frequencyCounter1[index])
    // }

    // for (let index of arr2){
    //     frequencyCounter2[index] = (frequencyCounter2[index] || 0) + 1
    // }

    // for (let key in frequencyCounter1){
    //     if (!(key ** 2 in frequencyCounter2)){
    //         return false
    //     }
    //     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
    //         return false
    //     }
    // }
    // console.log('first array ' + JSON.stringify(frequencyCounter1))
    // console.log('second array '+ JSON.stringify(frequencyCounter2))
// }

//console.log(same([1, 2, 3,3 ] , [4, 1, 9, 2]))

const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        //console.log('not an anagram')
        return false;
    }

    const obj = {};

    // for (let i = 0; i < str1.length; i ++){
    //     let letter = str1[i]
    //     obj[letter] ? obj[letter] +=1 : obj[letter] = 1;
    // }
    for (let i of str1) {
        obj[i] ? obj[i] += 1 : obj[i] = 1;
        //console.log('this is ' + JSON.stringify(obj) + 'and ' + obj[i]);
    }
    

    // for (let i = 0; i < str2.length; i ++) {
    //     let letter = str2[i]
    //     if (!obj[letter]){
    //         return false
    //     } else {
    //         obj[letter] -= 1;
            
    //     }
    // }
    for (let i of str2){
        !obj[i] ? console.log('not an anagram!') : obj[i] -= 1
    }
    //console.log(obj)
}

//console.log(validAnagram('anagram', 'gramana'))






