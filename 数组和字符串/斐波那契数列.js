function fibonacci (n) {
    if(n === 0){
        return 0
    }
    if(n === 1){
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

var fibonacci2 = function(n) {
   let next = 1;
   let prev = 1;
   let cur = 0;
   if(n==0){return pre};
   if(n==1){return next};
   for(i === 2; i<n; i++){
    cur = next + prev;
    prev = next;
    next = cur;
   }
   return next
};


console.log(fibonacci(50));//6765






























// let pre = 0;
// let next = 1;
// if(n==0){return pre};
// if(n==1){return next};

// let cur = 0;
// for(let i = 2;i <= n;i++){
//     cur = pre + next;
//     pre = next;
//     next = cur;
// }   
// return next;