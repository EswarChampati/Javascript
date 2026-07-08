/* 
it contians only unique values.it holds any datatype values
*/


let set= new Set()   //to create the set
set.add(5)           //to addd the element in the set
set.add("navin")
set.add(6)
set.add(5)           //it will not consider the same element in the set
set.add("Navin")    //values inside the set are case sensitive
set.delete("navin")
console.log(set.has(5))
console.log(set)
