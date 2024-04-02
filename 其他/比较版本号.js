// v1: 2.3.5
// v2: 3.2.5
function compareVersion(v1, v2){
    const arr1 = v1.split('.')
    const arr2 = v2.split('.')
    let result = 0;
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] > arr2[i]){
            return 1
        } else if(arr1[i] < arr2[i]){
            return -1
        } 
    }
    return result;
}

console.log(compareVersion('7.8.7','7.8.7'))