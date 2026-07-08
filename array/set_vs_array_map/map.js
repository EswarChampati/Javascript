let map=new Map()
map.set("navin" ,"java")          //set is used to set the value to the key pair
map.set("hyder" ,"javascript")
map.set("sanjevan" ,"solidity")
console.log(map.keys())          // to print the keys of an map
console.log(map.values())        //to print the values of an map
console.log(map)
// map.clear()                      //to clear the whole map
// console.log(map)             
map.forEach((k,v) => console.log(v,k) )       //k means key and v means value 