namespace B2{
    // any任意类型 any可以赋值给任意类型 也可以被任意类型赋值
    let a:any = 22;
    a = 'xxaaa'
    a = 12
    let x: string = 'aaa'
    x = a;

    // unknow类型，可以被任意类型赋值 不能赋值(除了unknow和any)给任意类型 
    let un1: unknown
    un1 = 'xxxx'
    un1 = 22
    // let un2: number = un1
}
