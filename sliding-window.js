



const maxSubArraySum = (arr, num) => {

    let maxSum = 0;
    let tempSum = 0;

    console.log('line 10 ' + maxSum + tempSum)

    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        console.log(`line 14 --- this is the num ${num} and index ${arr[i]}`)
        maxSum += arr[i];
        console.log(`line 16 ---  this is  max sum ${maxSum}  and this is ${arr[i]}`)
    }
    console.log(`line 18 ---  this is  max sum ${maxSum}  and this is ${tempSum}`)
    tempSum = maxSum;
    console.log(` line 20 --- the tempsum ${tempSum} and maxSum ${maxSum}`)

    for (let i = num; i < arr.length; i++) {
        console.log(`line 23 ---  this is  num ${num} this is the tempsum ${tempSum} max sum ${maxSum}  and this is the index ${arr[i]}`)
        tempSum = tempSum - arr[i - num] + arr[i];
        console.log(`line 25 ---  this is  num ${num} this is the tempsum ${tempSum} max sum ${maxSum}  and this is the index ${arr[i]}`)
        maxSum = Math.max(maxSum, tempSum);
        console.log(`line 27 ---  this is  num ${num} this is the tempsum ${tempSum} max sum ${maxSum}  and this is the index ${arr[i]}`)
    }
    
    console.log(maxSum);
}

console.log(maxSubArraySum([1,3,2,5,7,5,2], 2))