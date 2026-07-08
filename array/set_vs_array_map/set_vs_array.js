let set= new Set()
let values=new Array()
for(let i=0;i<=20;i++)
{
    let num=Math.ceil(Math.random()*100)
    set.add(num)
    values.push(num)
}
console.log(set)
console.log(values)