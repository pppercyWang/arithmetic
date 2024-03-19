// 添加观察者和通知订阅者
class Observer{
    constructor(){
        this.subscribes = [];
    }
    addSub(sub){
        this.subscribes.push(sub)
    }
    notify(){
        this.subscribes.forEach(sub=>sub.onNotify())
    }
}

// new 一个watch，去访问属性，触发getters
class Watcher{
    constructor(name){
        this.watcherName = name
    }
    onNotify(){
        console.log('我是观察者：' + this.watcherName, '收到通知')
    }
}



const observer = new Observer()
const watch1 = new Watcher('watch1')
const watch2 = new Watcher('watch2')
const watch3 = new Watcher('watch3')
observer.addSub(watch1)
observer.addSub(watch2)
observer.addSub(watch3)
observer.notify()
