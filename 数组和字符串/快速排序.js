// splice 删除数组的某一个/多个元素，或者在某个下标增加几个元素。该方法会改变原数组，返回被删除的值
// slice 浅拷贝已有数组中返回选定的元素，返回一个新数组。该方法不会改变原数组，返回选定的元素
let a = [1,2,3]
let b = [4,5,6]
let ar = a.splice(1,1,'alice')
let br = b.slice(0,2)
console.log(a,'--',ar)
// [ 1, 'alice', 3 ] -- [ 2 ]
console.log(b,'--',br)
// [ 4, 5, 6 ] -- [ 4, 5 ]
const quickSort = function(arr){
    if(arr.length < 2){
        return arr
    }
    let p = arr.splice(0,1)
    const left = [];
    const right = []
    for(let i = 0;i < arr.length; i++){
        if(arr[i]<p[0]){
            left.push(arr[i])
        } else{
           right.push(arr[i])
        }
    }
    return quickSort(left).concat(p).concat(quickSort(right))
}


console.log(quickSort([2,3,22,1,2444,32,3,44,6,77]))