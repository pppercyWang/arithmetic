namespace B6{
    // 枚举类型 对象所有取值的可能性集合
    // 数字枚举
    enum Direction {
        TOP = 2,
        BOTTOM,
        LEFT,
        RIGHT
    }
    let d1: Direction = Direction.TOP
    console.log(Direction[0])

    // 字符串枚举 只能通过属性获取值
    enum Sex {
        MAN = '男',
        WOMEN = '女'
    }

    console.log(Sex.MAN)

    // 常量枚举 不会编译枚举 直接获取值
    const enum ANIMAL{
        CAT,
        DOG,
        FISH
    }

    const a1 = ANIMAL.CAT //0

    // 异构枚举 混合字符串枚举，数字枚举
    enum STR {
        A = 'A',
        B = 'B',
        C = 'C',
        D = 22
    }
}