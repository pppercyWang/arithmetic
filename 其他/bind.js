// https://blog.csdn.net/m0_52409770/article/details/123484053?]

Function.prototype.myBind = function(obj, ...arg){
	let fn = this;
	return function(){
		fn.apply(obj,[...arg, ...arguments])
    }
}
/**
 * 1. 规定调用bind必须是函数
 * 2. 判断是否为new关键字调用，new.target !==undifend。然后使用aplly去改变this指向，
 * 返回值如果是一个对象，则直接返回，如果是正常的值类型，则返回该实例对象
 * 3. 继承函数的原型，通过Object.create方法
 */
Function.prototype.myBind2 = function (thisObj, ...args) {
    // 规定调用bind的必须是函数
    if(typeof this !== 'function' || {}.toString.call(this) !== '[object Function]'){
        throw new Error(`${this} must be a function`)
    }
    const fn = this
    let bound =  function () {
        const finalArgs = [...args, ...arguments]
        // 判断是否有调用new关键字
        if(new.target !== undefined){
            // 构造函数的返回值,注意这里的this为实例对象
            const result = fn.apply(this, finalArgs)
            if(result instanceof Object){
                //如果返回的是对象类型的值则返回该对象
                return result
            }else{
                // 如果返回的是正常的值类型
                // 则返回该实例对象
                return this
            }
        }else{
            // 如果没有new调用则按原来的操作
            return fn.apply(thisObj, finalArgs)
        }
    }
    //继承函数的原型
    if(fn.prototype){
        // 为什么使用了 Object.create? 因为我们要防止，bound.prototype 的修改而导致self.prototype 被修改。
        // 不要写成 bound.prototype = self.prototype; 这样可能会导致原函数的原型被修改。
        bound.prototype = Object.create(fn.prototype)
        bound.prototype.constructor = fn
    }
    return bound
}


function test(a, b, c){
    console.log(this.name, a, b, c, '--------')
}

const a = test.myBind({name: 'ddd'} , 1,2,3)
a(5)


let obj = {name:'zss',age:18}
function say(name,age){
    this.name=name
    this.age=age
    console.log(this); // new 的优先级要高于bind，故this为该实例对象
    console.log(this.name); // 孙悟空
}
const xxx = say.myBind(obj)
// new 的优先级要高于bind，故this为该实例对象
console.log(new xxx('孙悟空',29)); // 输出 {name: "孙悟空", age: 29}