namespace B3{
    // void类型表示函数没有返回值
    const f2 = (): void =>{
        // return 20;
    }
    // never类型 没有终结
    function f3(): never {
        throw new Error('抛出错误')
    }
}