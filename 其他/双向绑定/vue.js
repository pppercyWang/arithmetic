/**
 * 在new一个vue实例式，会传入原始数据，通过数据劫持将原始数据变成响应式数据。具体是在Observer类中，
对数据对象进行递归遍历，对其所有的children设置Object.defineProperty。同时，会有一个解析模版的过
程，对template的插值表达式/带v-model标签进行匹配，修改其nodeValue值，并且new一个watcher，将修
改nodevalue的方法作为参数进行传递。在Observer类里面还会new一个Dependency类的实例，里面有一个依赖列表，
存贮每个watcher，在watcher实例创建时的，会去访问下数据，触发defineProperty的getter，在这里进行依赖收
集。当数据发生改变时，就会触发definePropertyd的setter，在这里对依赖列表的watcher进行通知，执行watcher
的update方法，实现数据驱动视图更新。在解析模版的过程中，还会对v-model的标签进行事件监听，当视图发生改变时，
去修改对应vue实例的数据对象，这时就完成了视图驱动数据更新。总之，vue的双向绑定就是基于数据劫持和观察者模式实现的。
 */


class Vue {
    constructor(obj_instance){
        this.$data = obj_instance.data;
        // 将传入的data，进行数据劫持
        Observer(this.$data)
        // 解析HTML
        Compile(obj_instance.el, this)
    }
}

function Observer(data_instance){
    if(!data_instance || typeof data_instance !== 'object')return;
    const dependency = new Dependency()
    Object.keys(data_instance).forEach(key => {
        let value = data_instance[key]
        // 递归调用，让所有的children属性都设置object.defineProperty
        Observer(value) 
        Object.defineProperty(data_instance, key, {
            enumerable: true,
            configurable: true,
            get(){
                console.log(value,`${key}被访问了`)
                Dependency.temp && dependency.addSub(Dependency.temp) 
                return value;
            },
            set(newVal){
                // console.log(newVal, '新的值')
                value = newVal
                Observer(newVal)
                dependency.notify()
            }
        })
    })
}

// HTML模版解析
function Compile(element, vm){
    vm.$el = document.querySelector(element)
    const fragment = document.createDocumentFragment()
    let child;
    while(child = vm.$el.firstChild){
        fragment.append(child)
    }
    fragmentCompile(fragment)
    function fragmentCompile(node){
        const pattern = /\{\{\s*(\S+)\s*\}\}/
        if(node.nodeType === 3){
            const result_regex = pattern.exec(node.nodeValue)
            if(result_regex){
                const xxx = node.nodeValue
                const arr = result_regex[1].split('.')
                // 拿到具体的属性值【vm.$data[ccc][ccc][ccc]】
                const value = arr.reduce((total,current)=>total[current],vm.$data)
                // 替换前 阿流落：{{ name }} 
                node.nodeValue = xxx.replace(pattern, value)
                // 替换前 阿流落：王德澳 
                console.log('用属性创建订阅者',result_regex[1])
                new Watcher(vm, result_regex[1], newVal => {
                    node.nodeValue = xxx.replace(pattern, newVal)
                })
            }
            return 
        }
        if(node.nodeType === 1){
            const attr = Array.from(node.attributes);
            attr.forEach(i=>{
                if(i.nodeName === 'v-model'){
                    value = i.nodeValue.split(".").reduce((total,current)=>total[current],vm.$data)
                    node.value = value
                    new Watcher(vm, i.nodeValue, (newVal)=>{
                        node.value = newVal
                    })
                    node.addEventListener('input', e => {
                        arr1 = i.nodeValue.split(".");
                        arr2 = arr1.slice(0, arr1.length - 1)
                        const final = arr2.reduce((total, current)=>total[current], vm.$data)
                        final[arr1[arr1.length - 1 ]] = e.target.value;
                    })

                }
            })
        }
        // 递归遍历所有子节点的文档碎片
        node.childNodes.forEach(child =>  fragmentCompile(child))
    }
    vm.$el.appendChild(fragment)
}


// 依赖 - 收集和通知订阅者
class Dependency{
    constructor(){
        this.subscribes = [];
    }
    addSub(sub){
        this.subscribes.push(sub)
    }
    notify(){
        this.subscribes.forEach(sub=>sub.update())
    }
}

// new 一个watch，去访问属性，触发getters
class Watcher{
    constructor(vm, key, callback){
        this.vm = vm;
        this.key = key;
        this.callback = callback
        // 临时属性，可以在getter里面访问到watcher实例
        Dependency.temp = this;
        // 访问属性，触发getter
        key.split('.').reduce((total, cur)=>total[cur], vm.$data)
        // 防止多次创建Dependency 实例
        Dependency.temp = null;
    }
    update(){
        const value = this.key.split('.').reduce((total, cur)=>total[cur], this.vm.$data)
        this.callback(value);
    }
}