function getParamsByName(url, name){
    const search = url.split('?')[1].substring(1)
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    let result = search.match(reg)
    if(result){
        return decodeURIComponent(result[2])
    } else {
        return null
    }
}


console.log(getParamsByName('http://www.baidu.com?name=111&b=xxxx', 'b'))