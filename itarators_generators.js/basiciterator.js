//if we use the loops then we dont have a control to the loop in between
//so we use the iterators to have a control in betweeen flow of loops 
const a=["HTMl","CSS","javascript","ReactJS"]
for(let i in a)
{
    console.log(a[i])
}


//let try that one by iterators

const frontend=["HTMl","CSS","javascript","ReactJS"]
let c=frontend[Symbol.iterator]()
console.log(typeof(c))
