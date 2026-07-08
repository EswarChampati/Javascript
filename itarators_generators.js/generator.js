function* disp()
{
    console.log("code before the first yeild")
    yield 100
    console.log("code after the first yeild")
    yield 100+100
    console.log("code after the second yeild")
}
const generator=disp()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
