/**
 * 1. 比较前后两个值的位置，如果前面的大，就把它放到后面 
 * 2. 外面的for循环遍历一次后，最大的就已经在最后了，这个数就不用管了
 * 3. 这是里面的for循环就应该减少一次
 */

const babelSort = function(arr){
    let n = arr.length;
    for(let i = 0; i < n - 1; i++){
        for(let j = 0; j < n - 1 - i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
    }
    return arr 
}
console.log(babelSort([3,2,1,5,77,4,32,1]))