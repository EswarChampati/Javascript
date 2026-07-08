let values=[2,5,1,7,9,4]
for(let i in values)
{
    console.log(values[i])    //it is the external loop 
                              //it will take values from the array and give to values[i] 
}

values.forEach(function(numberfromvalues)
              {
                  console.log(numberfromvalues);               //it is the internal loop because it will take values from the values and work on it
              })    //here we can even perform the complex operations also