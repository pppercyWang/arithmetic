function getUrlParamsByName(serach,name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    let res = serach.substr(1).match(reg)
    return decodeURIComponent(res[2])
}


console.log(getUrlParamsByName('?xx=1&das=22', 'xx'))




