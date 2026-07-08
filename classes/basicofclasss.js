class car
{
    constructor(name)
    {
        this.Name=name
    }
     getname()
     {
        console.log(`the car name is ${this.Name}`)
     }
}
let BMW=new car("bugati")
BMW.getname()