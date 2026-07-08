class person
{
    constructor(name,age)
    {
        this.name=name
        this.age=age
    }
    getdetails()
    {
        console.log(`name is ${this.name}`)
        console.log(`age is ${this.age}`)
    }
}
class student extends person
{
    constructor(name,age,Class)
    {
       super(name,age)
       this.Class=Class
    }
    getdetails()
    {
        super.getdetails()
        console.log(`my class standard is ${this.Class}`)
    }
}
class teacher extends person
{
   constructor(name,age,subject)
   {
    super(name,age)
    this.teachersubject=subject
   }
   getdetails()
   {
    super.getdetails()
    console.log(`madam subject is ${this.teachersubject}`)
   }
}
let student1=new student("eswar champati",19,"btech 2 year")
student1.getdetails()

let teacher1=new teacher("rajat",32,"theory of computation")
teacher1.getdetails()