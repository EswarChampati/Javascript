values=[23,245,6,4,2,35,56,4]
values.forEach(function(nums)
{
    if(nums%2===0)
    {
        console.log(`the number is even and the number is ${nums}`)
    }      //here we are taking each values a of an array and finding the even or not
})

//here first we will check the nums of the array are even or not then we will take it
values.filter(function(n)
             {
                return n%2===0;
             })
      .forEach(function(nw)
             {
                console.log(`the even number are the ${nw}`)
             })

//by using the aroow function
values.filter(nums =>nums%2===0)
      .forEach(nums=>console.log(`the even number in the given array are ${nums}`))