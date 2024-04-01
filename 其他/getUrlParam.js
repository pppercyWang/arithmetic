function getParamsByName(url, name){
    const search = url.split('?')[1]
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    let result = search.match(reg)
    if(result){
        return decodeURIComponent(result[2])
    } else {
        return null
    }
}

function getUrlParams(url){
    const search = url.split('?')[1];
    if(search){
        const arr = search.split('&')
        const result = {}
        arr.forEach(value => {
            const temp = value.split('=')
            result[temp[0]] = decodeURIComponent(temp[1])
        });
        return result
    }else{
        return null
    }
   
}

console.log(getParamsByName('http://www.baidu.com?name=111&b=xxxx', 'b'))
// console.log(getUrlParams('http://www.baidu.com?name=111&b=xxxx', 'b'))