// let age=Symbol()
// let user={
//     Name:"hyder",
//     Qualification:"BE",
//     [age]:28           //it is a symbol so we want to place it []
// }
// console.log(user)



// let age=Symbol("age")
// let user={
//     Name:"hyder",
//     Qualification:"BE",
//     [age]:28         
// }
// console.log(user)
// console.log(user.age)
// console.log(user[age])        //to access the symbol datatype of the object



let age=Symbol()
let user={
    Name:"hyder",
    Qualification:"BE",
    [age]:28           
}
for(let key in user)
{
    console.log(key)
}
console.log(JSON.stringify(user))  //to print in the JSON format