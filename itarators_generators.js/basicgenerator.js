//to control the flow of execution of the function
function display()
{
    console.log("hello")
    console.log("how")
    console.log("are")
    console.log("you")
}
display()

function* disp()
{
    console.log("code before the first yeild")
    yield 100
    console.log("code after the first yeild")
}
const generator=disp()
console.log(generator.next())
console.log(generator.next())