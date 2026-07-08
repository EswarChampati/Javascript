//it is used to take value and perform operation on it 
values=[23,245,6,4,2,35,56,4]

values.filter(function(n)
             {
                return n%2===0;
             })
       .map(function(nums)
            {
                return nums*2              //double the even numbers of an array
            })
      .forEach(function(nw)
             {
                console.log(`the even number are the ${nw}`)
             })

//by using arrow functions
values.filter(nums =>nums%2===0)
      .map(nums=> nums*2)
      .forEach(nums=>console.log(`the even number in the given array are ${nums}`))



//filter , map,foreach dont change the values of the original array