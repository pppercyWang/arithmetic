namespace B9 {
    interface Person {
        name: string,
        age: number
    }
    interface Person2 {
        name: string,
        age?: number
    }
    interface Person3 {
        readonly name: string,
        age?: number
    }
    // 额外属性
    interface Person4 {
        name: string,
        age: number,
        [prop: string]: any
    }
    let p1: Person = {
        name: '小橘猫',
        age: 11
    }
    let p2: Person2 = {
        name: 'xxx'
    }
    let p3: Person3 = {
        name: 'xxxx',
    }
    let p4: Person4 = {
        name: 'xxx',
        age: 22,
        xxx: 'xxx'
    }

    interface Animal {
        name: string
    }

    interface Cat extends Animal{
        age: string
    }

    let c1: Cat = {
        name: 'xxx',
        age: '22'
    }
    // 接口重名,等同于接口继承
    interface Dog{
        xxx: '111'
    }
    interface Dog{
        bbb: '111'
    }

}