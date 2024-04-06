function getUrlParamsByName(serach,name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    let res = serach.substr(1).match(reg)
    if(res !== null){
        return decodeURIComponent(res[2])
    } else {
        return null
    }
}


console.log(getUrlParamsByName('?xx=1&das=22', 'xx'))




    