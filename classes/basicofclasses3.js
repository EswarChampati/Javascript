class person
{
   constructor(name)
   {
    this.name=name
   }
   getname()
   {
    console.log(this.name)
   }
}

class student extends person
{
   constructor(name)
   {
    console.log("this is the child class")
    super(name)
    console.log(`name of the person ${this.name}`)
   }
}
let student123=new student("Eswar champati")