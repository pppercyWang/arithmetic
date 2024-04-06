const cc = {
    value:'cc'
}
const f1 = function(){
    console.log(this)
    const f2 = ()=>{
        console.log('f2里的this', this)
        const f3 = ()=>{
            console.log('f3里的this', this)
        }
        f3()
    }
  f2()
}
f1.call(cc)
  
// 箭头函数没有this指向，通过作用域链找到离自己最近的this
// 普通函数谁调用他，那他的this就指向谁