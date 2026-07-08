/*
syntax  splice(from index,to index+1,elements to be added)
removes the elements from the from index to to index and adds the remaining elements 
it overrides th original array
*/ 
let array=[55,56,57,58,59,60]
console.log(array)
array.splice(1,4,69)
console.log(array)