function sum(a,b,c,d,e)
{
    let result=a+b+c+d+e
    return result
}
let nums=[2,7,5,4,8]
let res=sum(...nums)           //it will go inside the array and spread it to the variable
console.log(res)