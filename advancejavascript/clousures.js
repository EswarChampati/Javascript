//function with the lexical scope
function outer()
{
    let num1=10
    console.log("outer func")
    return function(num3)
    {
        let num2=20
        console.log(num1,num2,num3 +"this is the inner function")
    }
}
let result=outer()     //here the inner function is also assigned
result(30)


function outer()
{
    let num1=10
    console.log("outer func")
    return function(num3)
    {
        let num2=20
        console.log(num1,num2,num3 +"this is the inner function")
    }
}
let resul=outer    //here the inner function is not asssigned
resul(30)