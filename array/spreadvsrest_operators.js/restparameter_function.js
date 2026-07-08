function sum(a,b)
{ 
    let result=a+b;
     return result          //this function will take only 2 parameters
}
let result=sum(4,5);
console.log(result)


function sums(a,b,...nums)
{
    let result=a+b
    for(let i in nums)
    { 
        result=result+nums[i]      //this function will take the variable numbers of parameters
    } 
    return result
}
let finalvalue=sums(3,4,5,6,7,8,9)
console.log(finalvalue)