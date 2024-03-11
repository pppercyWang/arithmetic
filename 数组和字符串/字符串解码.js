// 输入：s = "3[a]2[bc]"
// 输出："aaabcbc"


var decodeString = function(s) {
    let stack = [];
    let num  = ''
    for(let i = 0;i < s.length; i++){
        if(!isNaN(s[i])){
            num = num+s[i]
            if(isNaN(s[i+1])) {
                stack.push(num)
                num = ''
            }
        } else if(s[i] === ']'){
            let str = ''
            while (stack[stack.length - 1] !== '['){
                str = stack.pop() + str;   
            }
            stack.pop()
            stack.push(str.repeat(stack.pop()))
        } else {
            stack.push(s[i])
        }
    }
    return stack.join('')
};

// ((a)[2]c)[3]  aacaacaac
var decodeString2 = function(s) {
    let stack = [];
    let num  = ''
    for (let i = 0; i < s.length; i++) {
        if(!isNaN(s[i])){
            num = num + s[i]
            if(isNaN(s[i+1])){
                stack.push(num);
                num = '';
            }
        } else if(s[i] === ']'){
            let str = '';
            let curNum = '';
            while (stack[stack.length - 1] !== '(')
            {
                if(!curNum){
                    curNum = stack.pop()
                    stack.pop()
                    console.log(stack)
                } else if(stack[stack.length - 1] === ')'){
                    stack.pop()
                } else {
                    str = stack.pop() + str
                }
            }
            stack.pop()
            stack.push(str.repeat(curNum))
        } else {
            stack.push(s[i])
        }        
    }
    return stack.join('')
};

// console.log(decodeString('3[a]2[bc]'))
console.log(decodeString2('((a)[2]c)[3]'))































