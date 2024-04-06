function getMax2Num(arr){
    let maxNum = -1;
    let maxNum2 = -1;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= maxNum){
            maxNum2 = maxNum
            maxNum = arr[i]
        } 
    }
}

function getMaxNum(arr, num){
    console.log(arr.sort((a,b)=>a-b).slice(num, arr.length-1))
}
getMaxNum([5,2,4,10,22,44,55],3)