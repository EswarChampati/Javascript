function Animal(value)
{
    var obj={}
    obj.name=value.name
    return obj
}
function Dog(value)
{
    var obj=Animal(value)
    obj.greet=() =>   `hello world ,${obj.name}`
    return obj
}
var mycuteDog=Dog({name:"scoop"})
console.log(mycuteDog.greet());