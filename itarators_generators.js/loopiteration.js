const frontend=["HTMl","CSS","javascript","ReactJS"]
let itr1=frontend[Symbol.iterator]()
let itr=itr1.next()
while(!itr.done)
{
    console.log(itr.value)
    itr=itr1.next()
}