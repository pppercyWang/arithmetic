function f1(a,f,t,...rest){
    console.log(rest);
}
f1(1,3,4,5,6); //输出[5,6]
 
function f2(...rest){
    console.log(rest);
}
f2(1,3,4,5,6);   // 输出[1,3,4,5,6]

function f3(...rest){
    console.log(arguments);
}

f3(1,3,4,5,6);   // 输出{ '0': 1, '1': 3, '2': 4, '3': 5, '4': 6 }
