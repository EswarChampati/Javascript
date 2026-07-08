function* disp()
{
    console.log("code before the first yeild")
    yield "first yeild"
    console.log("code after the first yeild")
    yield "second yeild"
    console.log("code after the second yeild")
}
const generator=disp()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
