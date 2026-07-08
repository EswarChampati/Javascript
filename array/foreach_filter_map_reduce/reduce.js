//it is used to reduce an array(by taking all element of an array and make it one by performing operations).
//it will not change the original array

values=[2,8,5,3,9,6]
let resutl = values.filter(nums=>nums%2===1)
                   .map(nums=>nums*2)
                   .reduce(function(sum,nums)
                           {
                              return sum+nums
                           },0) 
                           console.log(resutl)