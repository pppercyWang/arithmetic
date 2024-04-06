function t1(arr){
  return Array.from(new Set(arr))
}
function t2(arr){
  let arr2 = []
  for(let i = 0;i<arr.length;i++){
    if(arr2.indexOf(arr[i]) === -1){
      arr2.push(arr[i])
    }
  }
  return arr2
}
function t3(arr){
  let arr2 = []
  for(let i = 0;i<arr.length;i++){
    if(!arr2.includes(arr[i])){
      arr2.push(arr[i])
    }
  }
  return arr2
}
console.log(t3([111,111,true,true,'3','3']))