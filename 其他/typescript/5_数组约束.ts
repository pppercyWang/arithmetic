namespace B5 {
    // 数组类型约束
    let arr: number[] = [1,2,3]
    let arr2: Array<number> = [1,2,3]

    // 元组约束 约束了数组的长度和类型
    let arr3: [number, string] = [1, '222']

    let arr4: Array<any> = ['222','333',222]

    let arr5: Array<Array<number>> = [[1,2,3]]


    let arr6: number[][] = [[1,2,3]]

}