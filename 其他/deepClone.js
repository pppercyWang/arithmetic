function deepClone(obj){
    const cloneObj = obj instanceof Array ? [] : {}
    for(key in obj){
        if(typeof obj[key] === 'object'){
            cloneObj[key] = deepClone(obj[key])
        } else{ 
            cloneObj[key] = obj[key]
        }
    }
    return cloneObj
}

console.log(deepClone([{d:'xxx', x:'xxx2'},[1,2,3],3]))
console.log(deepClone({
    a: 'xxxx',
    b: {
        a: 'xxxx',
        b: 'dsadasa'
    },
    c: 'ccccc'
}))

