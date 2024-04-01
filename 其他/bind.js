Function.prototype.myBind = function(obj, ...arg){
    let fn = this;
    return function(){
        fn.apply(obj, [...arg, ...arguments])
    }
}

function test(a, b, c){
    console.log(this.name, a, b, c, '--------')
}

const a = test.myBind({name: 'ddd'} , 1,2,3)
a(5)