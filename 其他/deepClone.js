function deepClone(obj){
    let objClone = Array.isArray(obj)?[]:{};
    if(obj && typeof obj === 'object'){
        for (key in obj){
            if(obj.hasOwnProperty(key)){
                if(obj[key] && typeof obj[key] === "object"){
                    objClone[key] = deepClone(obj[key])
                } else {
                    objClone[key] = obj[key]
                }
            }
        }
    }
    return objClone;
}


// let a=[1,2,3,4],
//     b=deepClone(a);
// a[0]=2;
// console.log(a,b);


let a = {a: '123', b: {
    xxx: '1',
    b: 2
}}

let b = deepClone(a)
a.a = 'ccc'

console.log(a, b)