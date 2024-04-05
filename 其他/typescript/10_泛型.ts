function fn<T>(arg: T): T{
    return arg
}
fn<number>(1)
fn<string>('1')
fn<number[]>([2,3,4])
