class person
{

}
class student extends person
{
    constructor(name,age,Class)
    {
       this.name=name
       this.age=age
       this.Class=Class
    }
    getdetails()
    {
        console.log("my name is"+this.name);
        console.log(`my age is ${this.age}`)
        console.log(`my class standard is ${this.Class}`)
    }
}
class teacher extends person
{
   constructor(name,age,subject)
   {
    this.teachername=name
    this.teacherage=age;
    this.teachersubject=subject
   }
   getdetails()
   {
    console.log(`madam name is ${this.teachername}`)
    console.log(`madam age is ${this.teacherage}`)
    console.log(`madam subject is ${this.teachersubject}`)
   }
}
let student1=new student("eswar champati",19,"btech 2 year")
student1.getdetails()

let teacher1=new teacher("rajat",32,"theory of computation")
teacher.getdetails()

//to get the output we want to use the super keywords in constructor and also in the method