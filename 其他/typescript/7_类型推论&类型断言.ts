namespace B7 {
    // 类型推论 计算机根据变量初始值类型推论出其约束类型
    let str = 'xxxx'
    // str = 22

    // 类型断言 人为断定值的类型
    // 语法1 值 as类型
    // let el1 = document.querySelector('div') as any;
    // 语法2 <类型>值
    // let el2 = <any>document.querySelector('div')
    // 语法3 非空断言 值！
    function fn(a: string, b?:string){
        console.log(b!.length)
    }
    fn('xxx')
    // 语法4 const断言
    let num1 = 20 as const
    // num1 = 30
    let obj = {
        wife: 'lsr',
        cat: 'miao'
    } as const
    // obj.wife = 'ddd'

    let arr = <const>[1,2,3]
    // arr[0] = 1

    // 强制性断言
    let a = 20 as unknown as string
}